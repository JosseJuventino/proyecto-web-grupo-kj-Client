import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/cardsInfo/CardContainer";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import { useNavigate } from "react-router-dom";

function ProjectsUser() {
  // Obtener el usuario actual
  const user = CheckIfUserLogin();
  // Hook de navegación para cambiar de ruta
  const navigate = useNavigate();
  // Estados para almacenar proyectos activos y finalizados
  const [projectActive, setProjectActive] = useState([]);
  const [projectFinished, setProjectFinished] = useState([]);
  // Obtener la ubicación actual de la aplicación
  const location = useLocation();

  // Efecto que se ejecuta cuando el componente se monta o cuando el usuario cambia
  useEffect(() => {
    // Verificar si hay un usuario autenticado
    if (user) {
      // Obtener las ID de proyectos activos y finalizados del usuario
      const uidProjectsActivos = user.proyectos.activos.map(
        (project) => project.idProject
      );
      const uidProjectsFinalizados = user.proyectos.finalizados.map(
        (project) => project.idProject
      );

      // Obtener todos los proyectos desde el almacenamiento local
      const proyectos = JSON.parse(localStorage.getItem("projects")) || [];

      /** Filtrar los proyectos activos */
      const projectsActiveFiltered = proyectos.filter((project) =>
        uidProjectsActivos.includes(project.uid)
      );
      /** Filtrar los proyectos finalizados */
      const projectsFinishedFiltered = proyectos.filter((project) =>
        uidProjectsFinalizados.includes(project.uid)
      );

      // Actualizar estados con los proyectos filtrados
      setProjectFinished(projectsFinishedFiltered);
      setProjectActive(projectsActiveFiltered);
    }
  }, [user]);

  return (
    <>
      {/* Componente de encabezado */}
      <Header />
      {/* Botón de retorno a la página de inicio del dashboard */}
      <div className="mt-20 ml-5" onClick={() => navigate("/dashboard")}>
        <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
      </div>
      {/* Verificar la ruta actual y renderizar proyectos activos */}
      {location.pathname === "/dashboard/projects-actives" && (
        <div>
          <h2 className="mt-2 text-3xl text-center">Proyectos Activos</h2>
          <div>
            {/* Verificar si hay proyectos activos para mostrar */}
            {projectActive.length > 0 ? (
              <CardContainer
                text=""
                hasButton={false}
                type="active"
                projectsActives={projectActive}
                needMorePage={false}
              />
            ) : (
              <h2>Al parecer no tienes proyectos para mostrar</h2>
            )}
          </div>
        </div>
      )}
      {/* Verificar la ruta actual y renderizar proyectos finalizados */}
      {location.pathname === "/dashboard/projects-finished" && (
        <div>
          <h2 className="mt-2 text-3xl text-center">Proyectos Finalizados</h2>
          <div>
            {/* Verificar si hay proyectos finalizados para mostrar */}
            {projectFinished.length > 0 ? (
              <CardContainer
                text=""
                hasButton={false}
                type="active"
                projectsActives={projectFinished}
                needMorePage={false}
              />
            ) : (
              <h2>Al parecer no tienes proyectos para mostrar</h2>
            )}
          </div>
        </div>
      )}
      {/* Componente de pie de página */}
      <Footer />
    </>
  );
}

export default ProjectsUser;
