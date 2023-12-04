import TableProyects from "../../components/table-admin/TableProyects";
import Count from "./bottones-conteo/Count";
import { getInscriptions } from "../../../services/inscription.service";
import { useEffect, useState } from "react";

function HomeAdmin() {
  const [inscriptions, setInscriptions] = useState([]);

  const getData = async () => {
    try {
      const fetchedInscriptions = await getInscriptions();
      setInscriptions(fetchedInscriptions);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const header = [
    "Estudiante",
    "Proyecto",
    "Correo",
    "Lugar de servicio",
    "Estado",
  ];

  return (
    <>
      <div>
        <div>
          <h1 className="mt-10 mx-5 text-4xl font-bold my-8">Inicio</h1>

          <div className="mb-10">
            <Count />
          </div>
        </div>

        <div className="bg-white rounded-xl p-8">
          <div>
            <h1 className="mr-auto pl-16 text-3xl">Ultimas Inscripciones</h1>
          </div>
          <div className="w-full">
            <TableProyects
              header={header}
              rows={inscriptions.map((inscriptions) => [
                inscriptions.userName,
                inscriptions.projectName,
                inscriptions.emailUser,
                inscriptions.status,
              ])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
