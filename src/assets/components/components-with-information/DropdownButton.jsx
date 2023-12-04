//import { NavLink } from "react-router-dom";


function DropdownButton({text, opciones, seleccion }) {
  return (
    <>
           <div className=" mt-16">
          <p className="text-2xl font-bold mx-5"> {text} </p>
    <div className="cursor-pointer">
      <select
        className=" md:w-[400px] w-full text-center mt-4 py-2 text-lg rounded-full bg-black-custom text-white transition-colors duration-500 ease-in-out border-black-custom border-4 hover:border-black-custom hover:bg-transparent hover:text-black hover:border-4"
        onChange={(e) => seleccion(e.target.value)}
      >
        {opciones.map((valores) => (
          <option className="mt-5" key={valores.value} value={valores.value}>
            {valores.text}
          </option>
        ))}
      </select>
      
    </div>
    </div>
    </>
  );
}

export default DropdownButton;
