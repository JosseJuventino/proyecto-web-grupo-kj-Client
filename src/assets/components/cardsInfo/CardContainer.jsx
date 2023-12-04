import "./CardContainer.css";
import { Card } from "./Cards/Card";
import { NavLink } from "react-router-dom";

function CardContainer({
  text,
  hasButton,
  type,
  projectsActives,
  needMorePage,
  textNotSearch,
}) {
  let projectsSliced = projectsActives;
  if (needMorePage) {
    projectsSliced = projectsActives.slice(0, 4);
  }

  return (
    <>
      <div className="p-10 mt-5">
        <h1 className="text-3xl">{text}</h1>
        {projectsSliced.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 mx-7 card-container md:grid-cols-2 lg:grid-cols-4">
            {projectsSliced.map((project, index) => (
              <Card key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10 text-2xl text-center">{textNotSearch}</div>
        )}

        {hasButton && needMorePage ? (
          <div className="flex flex-row items-end justify-end">
            <NavLink
              to={
                type == "active"
                  ? "/dashboard/projects-actives"
                  : "/dashboard/projects-finished"
              }
              className="px-4 py-2 mt-5 font-normal transition-colors duration-300 bg-white rounded-lg shadow-md hover:bg-black-custom hover:text-white"
            >
              Ver más <i className="fa-solid fa-angle-right"></i>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default CardContainer;
