import TableProyects from "../../components/table-admin/TableProyects";
import { useEffect, useState } from "react";
import { getInscriptions } from "../../../services/inscription.service";

function CirculoEstudio() {
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

  const header = ["Estudiante", "Proyecto", "Correo", "Estado"];

  return (
    <>
      <div>
        <div className="bg-white rounded-xl p-8">
          <div>
            {
              <h1 className="ml-14 lg:mr-auto mt-5 text-2xl lg:text-3xl">
                Ultimas inscripciones
              </h1>
            }
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

export default CirculoEstudio;
