import TableInicio from "../../components/table-admin/TableInicio";
import Count from "./bottones-conteo/Count";

function HomeAdmin() {
  
const header = [
  "Proyecto",
  "Esctudiante",
  "Carnet",
  "Lugar de servicio",
  "Carrera",
  "Facultad"
];



  return (
    <>
      <div>

      <div >
       <h1 className="mt-10 mx-5 text-4xl font-bold my-8">Inicio</h1>
       
          <div className="mb-10">
          <Count/>
          </div>
       </div>
  

        <div className="bg-white rounded-xl p-8">
        <div>
        <h1 className="mr-auto pl-16 text-3xl">Ultimas Inscripciones</h1>
        </div>
        <div className="w-full">
          <TableInicio
            header={header} 
            rows={[
              ['Caridad', 'Juan', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'],
              ['Apoyo', 'Juan', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'], 
              ['alimentos', 'Juan', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'],
              ['Juan', 'Perez', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'],
              ['Juan', 'Perez', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'], 
              ['Apoyo', 'Juan', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria'], 
              ['Juan', 'Perez', '00000000', 'San Salvador', 'Ingenieria informatica', 'Ingenieria']
            ]}
            showAction={true}  // Mostrará la columna de Acción
            showCheckbox={false}  // No mostrará la columna de checkbox
          />  
        </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
