import TableProyects from "../../components/table-admin/TableProyects";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../../services/project.service";

function ProyectsAdmin() {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const fetchedProjects = await getAllProjects();
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const header = [
    "Proyecto",
    "Carrera",
    "Tipo de servicio",
    "Lugar de servicio",
    "Modalidad",
  ];

  return (
    <>
      <div>
        {
          <h1 className="ml-14 mt-5 lg:mr-auto  text-2xl lg:text-3xl">
            Proyectos
          </h1>
        }
        <div className="w-full">
          <TableProyects
            header={header}
            rows={projects.map((project) => [
              project.title,
              project.careers.join(", "),
              project.socialService,
              project.place,
              project.modality,
            ])}
            idProject={projects.map((project) => project.id)}
          />
        </div>
      </div>
    </>
  );
}

export default ProyectsAdmin;
