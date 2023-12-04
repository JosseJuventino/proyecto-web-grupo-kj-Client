
//import { useState } from "react";
//import Time from "../common-button/Time";
import "./IncriptionInfo.css";
import FileUploader from "./FileUploader";
import CommonButton from "../common-button/CommonButton"; 


function IncriptionInfo() {
  //const [seleccion, setSeleccion] = useState(0);

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
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const optionsMaterias = [
    { value: "0", text: "Seleccione --" },
    { value: "1", text: "Calculo I" },
    { value: "2", text: "Calculo II" },
    { value: "3", text: "Calculo III" },
    { value: "4", text: "Fisica I" },
    { value: "5", text: "Fisica II" },
  ];

  return (
    <section className="text-center">
      <h1 className="mt-10 mx-5 text-3xl font-bold">Inscripción a Círculos de Estudio</h1>

      <div className="flex lg:flex-row  flex-col justify-around gap-5 mx-5">
        <div className="">
          <DropdownButton
            text="Facultad"
            opciones={opcionesCarrera}
            seleccion={() => {}}
          />
        </div>
        <div className="">
          <DropdownButton
            text="Año de carrera"
            opciones={opcionesCarrera}
            seleccion={() => {}}
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-around gap-10 p-5">
        <section className="flex flex-col mt-20">
          <Time
            title="¿Qué horario tiene disponible para impartir las tutorías?"
            options={optionsHours}
          />
        </section>
        <section className="flex flex-col mt-20">
          <Time
            title="¿Qué dias tiene disponible para impartir las tutorías?"
            options={optionsDays}
          />
        </section>
      </div>

      <div className="flex lg:flex-row  flex-col justify-around gap-5 mx-5">
      <div>
        <DropdownButton
          text="Materia que te gustaria impartir"
          opciones={optionsMaterias}
          seleccion={() => {}}
        />
      </div>
      <div>
        <DropdownButton
          text="Otra materia que te gustaria impartir"
          opciones={optionsMaterias}
          seleccion={() => {}}
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
          ></input>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-around mt-20 mx-5 gap-20">
        <div className="flex flex-col ">
        <div>
          <FileUploader />
          </div>

          <p className="m-5 ">
            Nota con la que aprobaste la materia que quieres impartir (adjuntar
            captura de pantalla)
          </p>

        </div>
      
        <div className="flex flex-col ">
        
        <div>
          <FileUploader />
        </div>

        <p className="m-5">
            CUM de carrera (Adjuntar captura de pantalla del Portal de Estudiante)
          </p>

        </div>
      </div>

    <div className="py-5">
    <CommonButton   text="Inscriccion Completa" />
    </div>
    </section>
  );
}

export default IncriptionInfo;
