import  { useState } from "react";
import DropdownButton from "../components-with-information/DropdownButton";
import Datetimebutton from "../components-with-information/Datetimebutton";
import FileUploader from "./FileUploader";
import CommonButton from "../common-button/CommonButton";
import "./IncriptionInfo.css";

function IncriptionInfo() {
  const [selectedFacultad, setSelectedFacultad] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedHours, setSelectedHours] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState("");
  const [selectedOtraMateria, setSelectedOtraMateria] = useState("");
  const [catedraticoName, setCatedraticoName] = useState("");
  const [notaCaptura, setNotaCaptura] = useState(null);
  const [cumCaptura, setCumCaptura] = useState(null);

  const opcionesCarrera = [
    { value: "0", text: "Seleccione --" },
    { value: "1", text: "Ciencias y Humanidades" },
    { value: "2", text: "Ciencias Económicas y Empresariales" },
    { value: "3", text: "Ingeniería y Arquitectura" },
    { value: "4", text: "Ciencias Jurídicas" },
  ];

  const optionsHours = [
    "7:00-9:00 AM",
    "9:00-11:00 AM",
    "11:00-1:00 PM",
    "1:00-3:00 PM",
    "3:00-5:00 PM",
    "5:00-7:00 PM",
    "7:00-9:00 PM",
  ];

  const optionsDays = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const optionsMaterias = [
    { value: "0", text: "Seleccione --" },
    { value: "1", text: "Cálculo I" },
    { value: "2", text: "Cálculo II" },
    { value: "3", text: "Cálculo III" },
    { value: "4", text: "Física I" },
    { value: "5", text: "Física II" },
  ];

  const handleInscription = () => {
    // variables de estado
    console.log({
      selectedFacultad,
      selectedYear,
      selectedHours,
      selectedDays,
      selectedMateria,
      selectedOtraMateria,
      catedraticoName,
      notaCaptura,
      cumCaptura,
    });

    
  }
  return (
    <section className="text-center">
      <h1 className="mt-10 mx-5 text-3xl font-bold">Inscripción a Círculos de Estudio</h1>

      

      <div className="flex lg:flex-row flex-col justify-around gap-5 mx-5">
        <div className="">
          <DropdownButton
            text="Facultad"
            opciones={opcionesCarrera}
            seleccion={(selectedValue) => setSelectedFacultad(selectedValue)}
          />
        </div>
        <div className="">
          <DropdownButton
            text="Año de carrera"
            opciones={opcionesCarrera}
            seleccion={(selectedValue) => setSelectedYear(selectedValue)}
          />
        </div>
      </div>

      

      <div className="flex lg:flex-row flex-col justify-around mt-20 mx-5 gap-20">
        <div className="flex flex-col ">
          <Datetimebutton
            title="¿Qué horario tiene disponible para impartir las tutorías?"
            options={optionsHours}
            seleccion={(selectedValues) => setSelectedHours(selectedValues)}
          />
        </div>

        <div className="flex flex-col ">
          <Datetimebutton
            title="¿Qué días tiene disponible para impartir las tutorías?"
            options={optionsDays}
            seleccion={(selectedValues) => setSelectedDays(selectedValues)}
          />
        </div>
      </div>

      

      <div className="flex lg:flex-row  flex-col justify-around gap-5 mx-5">
        <div>
          <DropdownButton
            text="Materia que te gustaría impartir"
            opciones={optionsMaterias}
            seleccion={(selectedValue) => setSelectedMateria(selectedValue)}
          />
        </div>
        <div>
          <DropdownButton
            text="Otra materia que te gustaría impartir"
            opciones={optionsMaterias}
            seleccion={(selectedValue) => setSelectedOtraMateria(selectedValue)}
          />
        </div>
      </div>

      

      <div className="text-2xl font-bold mt-20 flex flex-col mx-5">
        <p className="mx-12">
          Escribe el nombre del catedrático con el que recibiste la materia
        </p>

        <div>
          <input
            id="mensaje"
            name="mensaje"
            rows="1"
            className="input mt-5 lg:w-96 w-full"
            placeholder="Escribe aquí"
            onChange={(e) => setCatedraticoName(e.target.value)}
          />
        </div>
      </div>

      

      <div className="flex lg:flex-row flex-col justify-around mt-20 mx-5 gap-20">
        <div className="flex flex-col ">
          <div>
            <FileUploader onFileChange={(file) => setNotaCaptura(file)} />
          </div>

          <p className="m-5 ">
            Nota con la que aprobaste la materia que quieres impartir (adjuntar
            captura de pantalla)
          </p>
        </div>

        <div className="flex flex-col ">
          <div>
            <FileUploader onFileChange={(file) => setCumCaptura(file)} />
          </div>

          <p className="m-5">
            CUM de carrera (Adjuntar captura de pantalla del Portal de Estudiante)
          </p>
        </div>
      </div>

      <div className="py-5">
        <CommonButton text="Inscripción Completa" onClick={handleInscription} />
      </div>
    </section>
  );
}

export default IncriptionInfo;
