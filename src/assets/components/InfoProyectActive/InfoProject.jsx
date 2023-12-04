import { useEffect, useState } from "react";
import IconAndTitle from "./IconAndTitle";
import Title_Description from "./Title_Description";
import { CheckIfUserLogin } from "../../../helpers/checkIfUserLogin";

function InfoProyect({ info }) {
  const user = CheckIfUserLogin();
  const [project, setProject] = useState({});
  const [startDateState, setStartDate] = useState("");
  const [finishedDate, setFinishedDate] = useState("");

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.find((project) => project._id === info);
    setProject(project);

    if (user) {
      user.projectsActives.forEach((activesUser) => {
        if (activesUser.idProject === project._id) {
          setStartDate(activesUser.startDate);
        }
      });

      user.finishedProjects.forEach((activesUser) => {
        if (activesUser.idProject === project._id) {
          setStartDate(activesUser.startDate);
          setFinishedDate(activesUser.finishedDate);
        }
      });
    }
  }, [info, user]);S

  return (
    <div className="flex flex-col justify-center my-8 lg:flex-row">
      <figure className="object-cover w-full lg:w-1/2 lg:mb-4 lg:pr-5">
        <img
          className="object-cover w-full h-full rounded-sm"
          src={project.image}
          alt="imagen Proyecto"
        />
      </figure>
      <div className="px-4 lg:w-1/2">
        <div>
          <Title_Description
            titulo={project.title}
            description={project.description}
          />
        </div>
        <div>
          <IconAndTitle
            icon={"fa-solid fa-location-dot "}
            title={"Lugar:"}
            description={project.location}
          />
          <IconAndTitle
            icon={"fa-solid fa-clock"}
            title={"Servicio Social:"}
            description={project.type}
          />
          <IconAndTitle
            icon={"fa-solid fa-house-user"}
            title={"Modalidad:"}
            description={project.modality}
          />

          <IconAndTitle
            icon={"fa-solid fa-play"}
            title={"Fecha de inicio:"}
            description={startDateState}
          />

          {finishedDate != "" ? (
            <IconAndTitle
              icon={"fa-solid fa-stop"}
              title={"Fecha de finalización:"}
              description={project.startDate}
            />
          ) : (
            ""
          )}

          <IconAndTitle
            icon={"fa-solid fa-circle-info "}
            title={"Mas información:"}
            description={project.contactEmail}
          />
        </div>
      </div>
    </div>
  );
}
export default InfoProyect;
