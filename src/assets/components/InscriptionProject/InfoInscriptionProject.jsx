import IconAndTitle from "../InfoProyectActive/IconAndTitle";
import Title_Description from "../InfoProyectActive/Title_Description";
import ButtonInscribe from "./ButtonInscribe";
import { useState, useEffect } from "react";
import { getProjectById } from "../../../services/project.service";
import Envelope from "../../../assets/images/Envelope.gif";
import { getAllCareers } from "../../../services/careers.service";
import {CheckIfUserLogin} from "../../../helpers/checkIfUserLogin"
import {createInscription } from "../../../services/inscription.service";

function InfoInscriptionProject({ idProjectInfo }) {
  const [project, setProject] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isModalOpenAccept, setIsModalOpenAccept] = useState(false);


  const [carrersFiltered, setCarrersFiltered] = useState([]);
  const user = CheckIfUserLogin();


  async function fetchData() {
    try {
      const projectSearched = await getProjectById(idProjectInfo);
      setProject(projectSearched);
      const careersData = await getAllCareers();
      if (careersData.length > 0) {
        let careersFetched = [];
        careersData.forEach((career) => {
          let careerName = career.name;

          if (projectSearched.careers.includes(careerName)) {
            careersFetched.push({
              name: careerName,
              colorTag: career.colorTag,
            });
          }

        });
        setCarrersFiltered(careersFetched);
        console.log(careersFetched)
      }

    } catch (error) {
      console.error("Error al obtener el proyecto:", error.message);
    }
  }

  function showModalAccept() {
    setIsModalOpen(true);
  }
  async function validatingModal() {
    if (checked) {
      setIsModalOpenAccept(true);
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();

      // Formatear la hora como HH:MM
      const formattedCurrentHour = currentHour.toString().padStart(2, '0');
      const formattedCurrentMinute = currentMinute.toString().padStart(2, '0');

      // Crear la cadena de la hora en formato HH:MM
      const currentHourString = `${formattedCurrentHour}:${formattedCurrentMinute}`;

      try {
        let inscriptionObj = {
          emailUser: user.email,
          idProject: project._id,
          inscriptionHour: currentHourString,
          userName: user.name,
          projectName: project.title,
          status: "pendiente",
        };
        const inscription = await createInscription(inscriptionObj);
        console.log(inscription);
      } catch (error) {
        console.error("Error al crear la inscripcion:", error.message);
      }

    }
  }

  useEffect(() => {
    fetchData();
  }, [idProjectInfo]);

  return (
    <div className="flex flex-col justify-center my-8 lg:flex-row">
      <figure className="object-cover w-full lg:w-1/2 lg:mb-4 lg:pr-5">
        <img
          className="w-full rounded-sm "
          src={project.image}
          alt="imagen Proyecto"
        />
      </figure>

      {isModalOpen && (
        <div className="fixed text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg  lg:w-[40%] w-[70%]">
          {isModalOpenAccept ? (
            <div className="flex flex-col justify-center items-center relative">
              <div className="absolute -top-3 right-0">
                <i
                  onClick={() => setIsModalOpen(false)}
                  className="fas fa-times text-3xl cursor-pointer "
                ></i>
              </div>
              <img src={Envelope} className="w-36" alt="" />
              <p className="text-2xl mt-5"> Solicitud enviada con éxito</p>
              <p className="text-md ">Pronto se pondran en contacto contigo</p>
            </div>
          ) : (
            <div>
              <div className="absolute -top-0 right-2">
                <i
                  onClick={() => setIsModalOpen(false)}
                  className="fas fa-times text-3xl cursor-pointer "
                ></i>
              </div>
              <h2 className="text-xl mb-2">
                ¿Quieres enviar una solicitud de inscripción a este proyecto?
              </h2>

              <div>
                <input
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                  name="acepto"
                  id=""
                />
                <label htmlFor="acepto" className="ml-2">
                  Acepto cumplir con la responsabilidad que esto conlleva
                </label>
              </div>
              <ButtonInscribe eventClick={validatingModal} text={"Acepto"} />
            </div>
          )}
        </div>
      )}

      <div className="px-4">
        <div>
          <Title_Description
            titulo={project.title}
            hasTag={true}
            tags={carrersFiltered}
            description={project.description}
            careers={project.careers}
          />
        </div>
        <div>
          <IconAndTitle
            icon={"fa-solid fa-location-dot "}
            title={"Lugar:"}
            description={project.place}
          />
          <IconAndTitle
            icon={"fa-solid fa-clock"}
            title={"Servicio Social:"}
            description={project.socialService}
          />
          <IconAndTitle
            icon={"fa-solid fa-house-user"}
            title={"Modalidad:"}
            description={project.modality}
          />
          <IconAndTitle
            icon={"fa-solid fa-calendar"}
            title={"Horario:"}
            description={project.shedule}
          />
          <IconAndTitle
            icon={"fa-solid fa-circle-info "}
            title={"Mas información:"}
            description={project.moreInformation}
          />
        </div>

        <ButtonInscribe eventClick={showModalAccept} text={"Inscribirse"} />
      </div>
    </div>
  );
}
export default InfoInscriptionProject;
