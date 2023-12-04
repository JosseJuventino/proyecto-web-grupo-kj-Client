import Tag from "./Tag";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckIfUserLogin } from "../../../../helpers/checkIfUserLogin";
import { updateUser, getUserByEmail } from "../../../../services/user.service";
import { getAllCareers } from "../../../../services/careers.service";

import "./popAnimation.css";
// eslint-disable-next-line react/prop-types
export function Card({ project, isClickeable = true, haveButtonHeart = true }) {
  const navigate = useNavigate();
  const user = CheckIfUserLogin();

  const [clickedFav, setClickedFav] = useState(false);

  const [popAnimation, setPopAnimation] = useState(false);
  const [isInscription, setIsInscription] = useState(false);
  const [careers, setCareers] = useState([]);

  async function fetchCareers() {
    try {
      const careersData = await getAllCareers();
  
      if (careersData.length > 0) {
        let careersFetched = [];
        careersData.forEach((career) => {
          let careerName = career.name;
  
          // Reemplazar "Ingeniería" por "Ing"
          careerName = careerName.replace(/Ingeniería/g, 'Ing.');
  
          // Reemplazar "Licenciatura" por "Lic"
          careerName = careerName.replace(/Licenciatura/g, 'Lic.');
  
          // Reemplazar "Profesorado " por "Prof."
          careerName = careerName.replace(/Profesorado/g, 'Prof.');
  
          // Reemplazar "Tecnico " por "Tec."
          careerName = careerName.replace(/Técnico/g, 'Tec.');
  
  
          if (project.careers.includes(careerName)) {
            careersFetched.push({
              name: careerName,
              colorTag: career.colorTag,
            });
          }
        });
  
        setCareers(careersFetched);
      }
    } catch (error) {
      console.error("Error al obtener carreras", error);
    }
  }
  
  

  useEffect(() => {
    if (user) {

      //Proyectos favoritos del usuario
      let favoritosUid = user.projectFavorites;
      //Estableciendo si el id del proyecto que viene en la card 3existe, le pone el corazon activo
      if (favoritosUid.includes(project._id)) {
        setClickedFav(true);
      }
      //Obteniendo los Proyectos activos del usuario
      const uidProjectsActivos = user.projectsActives.map(
        (project) => project.idProject
      );

      const uidProjectsFinalizados = user.finishedProjects.map(
        (project) => project.idProject
      );

      if (
        uidProjectsActivos.includes(project._id) ||
        uidProjectsFinalizados.includes(project._id)
      ) {
        setIsInscription(true);
      }

      fetchCareers();
      
    }
  }, [project._id, user, project, project.careers]);
  
  const handleCardClick = () => {
    if (isClickeable) {
      if (isInscription) {
        navigate(`/dashboard/project/my-projects/${project._id}`);
      } else {
        navigate(`/dashboard/project/inscription-project/${project._id}`);
      }
    }
  };

  async function handleClick(event) {
    event.stopPropagation();

    setPopAnimation(true);
    let usuario = await getUserByEmail(user.email)

    if (usuario) {
      const updatedFavoritos = [...usuario.projectFavorites];
      const index = updatedFavoritos.indexOf(project._id);

      if (index !== -1) {
        updatedFavoritos.splice(index, 1);
      } else {
        updatedFavoritos.push(project._id);
      }

      await updateUser(usuario.email, {
        projectFavorites: updatedFavoritos,
      });

      // Actualizamos el estado local después de la actualización exitosa en la base de datos
      setClickedFav((prevClickedFav) => !prevClickedFav);

      // Después de un tiempo, quitar la clase de animación
      setTimeout(() => {
        setPopAnimation(false);
      }, 1000);
    }
  }


  return (
    <>
      {project ? (
        <div
          onClick={handleCardClick}
          className="relative flex flex-col items-start mt-5 w-[300px] overflow-hidden bg-white rounded-lg cursor-pointer card"
        >
          <div className="absolute top-0 m-2">

            {
              haveButtonHeart ? (
                <button
                  onClick={handleClick}
                  className={`bg-white p-2 px-3 rounded-full box-border `}
                >
                  <p className={`text-xl ${popAnimation ? "pop-animation" : ""}`}>
                    <i
                      className={
                        clickedFav
                          ? "fa-solid fa-heart text-red-500"
                          : "fa-regular fa-heart "
                      }
                    ></i>
                  </p>
                </button>
              ) : ""
            }

          </div>
          <figure className="h-[200px] w-full object-cover overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={project.image}
              alt="Imagen de proyecto"
            />
          </figure>

          <div className="flex flex-row items-end mt-4">
            <div className="absolute px-8 py-1 text-sm text-white bg-red-500 rounded-full type right-4">
              <p>{project.socialService}</p>
            </div>
          </div>

          <div className="p-5 Information">
            <div className="flex flex-row flex-wrap gap-1 tags">
              {careers ? (
                careers.map((tag, index) => (
                  <Tag key={`${tag.name}_${index}`} name={tag.name} background={tag.colorTag} />
                ))
              ): ""}
            </div>
            <h3 className="my-4 w- break-words text-xl lg:text-2xl">{project.title}</h3>
            <p>Modalidad: {project.modality}</p>
            <p className="mt-2 text-gray-400">
              <i className="fa-solid fa-location-dot"></i> {project.place}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}


