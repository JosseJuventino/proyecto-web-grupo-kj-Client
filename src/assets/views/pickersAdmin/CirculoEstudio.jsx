import TableCirculo from "../../components/table-admin/TableCirculo";
import { useEffect, useState } from "react";
import { getInscriptionsTutor } from "../../../services/circulosDeEstudio.service";

function CirculoEstudio() {
  const [circulos, setCirculos] = useState([]);

  const getData = async () => {
    try {
      const fetchedCirculos = await getInscriptionsTutor();
      setCirculos(fetchedCirculos);
    } catch (error) {
      console.error("Error fetching circulos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const header = ["Tutor", "Correo", "Materia", "Facultad"];

  return (
    <>
      <div>
        <div className="bg-white rounded-xl p-8">
          <div>
            {
              <h1 className="ml-14 lg:mr-auto  text-2xl lg:text-3xl">
                Circulos de estudio
              </h1>
            }
          </div>

          <div className="w-full">
            <TableCirculo
              header={header}
              rows={circulos.map((circulos) => [
                circulos.userName,
                circulos.emailUser,
                circulos.subject,
                circulos.faculty
              ])}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CirculoEstudio;
