import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import InputSearch from "../components/input-search/InputSearch";
import Dropdown from "../components/dropdown-buttons/Dropdown";
import CardContainer from "../components/cardsInfo/CardContainer";
import { useEffect, useState } from "react";
import { getAllCareers } from "../../services/careers.service";
import circulosEstudio from "../images/circulosEstudio.jpg";
import CommonButton from "../components/common-button/CommonButton";

function ProjectsSearchView() {
  const [projectActive, setProjectActive] = useState([]);
  const projectsComplete = JSON.parse(localStorage.getItem("projects")) || [];
  const [careers, setCareers] = useState([]);

  async function fetchCareers() {
    const careersData = await getAllCareers();
    const transformedCareers = careersData.map((career) => ({
      ...career,
      name: career.name
        .replace("Ingeniería", "Ing.")
        .replace("Licenciatura", "Lic.")
        .replace("Profesorado", "Prof.")
        .replace("Tecnico", "Prof."),
    }));
    setCareers(transformedCareers);
  }

  useEffect(() => {
    const proyectos = JSON.parse(localStorage.getItem("projects")) || [];
    setProjectActive(proyectos);
    fetchCareers();
  }, []);

  function handleChange(evt) {
    let projectsSimilar = [];
    //Recorre todos los proyectos y busca los que tengan el nombre parecido
    projectsComplete.forEach((project) => {
      if (
        project.title.toLowerCase().includes(evt.target.value.toLowerCase())
      ) {
        projectsSimilar.push(project);
      }
    });

    //Si no se escribe nada en el input, se muestran todos los proyectos
    if (evt.target.value === "") {
      setProjectActive(projectsComplete);
    } else if (projectsSimilar.length === 0) {
      setProjectActive(projectsComplete);
    } else {
      setProjectActive(projectsSimilar);
    }
  }

  //Funcion que se ejecuta cuando se selecciona una carrera, busca por carrera
  function handleChangeCarreer(evt) {
    let projectsSimilar = [];

    //Se recorre dos veces para buscar en los tags de cada proyecto la carrera y mostrar los proyectos que tengan esa carrera
    projectsComplete.forEach((project) => {
      project.careers.forEach((carreer) => {
        if (carreer === evt.target.value) {
          projectsSimilar.push(project);
        }
      });
    });

    setProjectActive(projectsSimilar);
  }

  function handleChangeModality(evt) {
    let projectsSimilar = [];
    console.log(evt.target.value);
    projectsComplete.forEach((project) => {
      if (project.socialService === evt.target.value) {
        projectsSimilar.push(project);
      }
    });

    setProjectActive(projectsSimilar);
  }

  /** Este array despues sera reemplazado por las carreras de la base de datos */
  let Carreer = {
    title: "Carrera",
    options: careers.map((career) => career.name),
  };

  let Modalidad = {
    title: "Modalidad",
    options: ["Interno", "Externo"],
  };

  return (
    <>
      <Header />
      <h1 className="mt-5 text-3xl text-center">Proyectos</h1>
      <div className="flex flex-col mx-10 mt-10 lg:mx-44">
        <InputSearch
          changeFunction={handleChange}
          placeholder={"Busca proyectos sociales acá"}
        />
        <div className="flex flex-col justify-center w-full mt-5 lg:flex-row lg:justify-around">
          <Dropdown
            eventHandler={handleChangeCarreer}
            optionsToShow={Carreer}
          />
          <Dropdown
            optionsToShow={Modalidad}
            eventHandler={handleChangeModality}
          />
        </div>
        <div className="container mx-auto mt-4">
          <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
            {user && user.isTutor ? (
              ""
            ) : (
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <img
                    src={circulosEstudio}
                    alt="circulosEstudio"
                    className="w-full min-h-full object-cover"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <h2 className="text-lg font-bold">¡Conviértete en tutor!</h2>
                  <p className="mt-3 text-sm">
                    ¡Sé un guía en el camino del conocimiento! Conviértete en
                    tutor y comparte tu experiencia para inspirar a otros.
                    ¡Regístrate ahora y marca la diferencia en la educación! 🚀
                  </p>
                  <CommonButton
                    link="/inscription-ce"
                    text="Regístrate"
                    icon="fas fa-user-plus"
                    color="white"
                    background="black"
                    borderColor="black"
                    hoverBackground="gray-800"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <CardContainer
        text=""
        hasButton={false}
        projectsActives={projectActive}
        needMorePage={false}
        textNotSearch="No se encontraron proyectos"
      />
      <Footer />
    </>
  );
}

export default ProjectsSearchView;
