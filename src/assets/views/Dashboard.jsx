import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Resume from "../components/resume/Resume";
import CardContainer from "../components/cardsInfo/CardContainer";
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { useEffect, useState } from "react";
import { NotLoggued } from "./NotLoggued";

function Dashboard() {
  const user = CheckIfUserLogin();

  const [projectActive, setProjectActive] = useState([]);
  const [projectFinished, setProjectFinished] = useState([]);

  useEffect(() => {
    if (user) {
      const uidProjectsActivos = user.projectsActives.map(
        (project) => project.idProject
      );
      const uidProjectsFinalizados = user.finishedProjects.map(
        (project) => project.idProject
      );

      const proyectos = JSON.parse(localStorage.getItem("projects")) || [];

      const projectsActiveFiltered = proyectos.filter((project) =>
        uidProjectsActivos.includes(project.idProject)
      );
      const projectsFinishedFiltered = proyectos.filter((project) =>
        uidProjectsFinalizados.includes(project.idProject)
      );

      setProjectFinished(projectsFinishedFiltered);
      setProjectActive(projectsActiveFiltered);
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div className="font-primary bg-background-primary">
          <Header isLoggedIn={true} />
          <Resume />
            <div>
              <CardContainer
                text="Proyectos activos"
                hasButton={true}
                type="active"
                projectsActives={projectActive}
                needMorePage={projectFinished.length > 4 ? true : false}
              />

              <CardContainer
                text="Proyectos finalizados"
                hasButton={true}
                type="finished"
                projectsActives={projectFinished}
                needMorePage={projectFinished.length > 4 ? true : false}
              />
            </div>
          <Footer />
        </div>
      ) : (
        <NotLoggued />
      )}
    </>
  );
}

export default Dashboard;
