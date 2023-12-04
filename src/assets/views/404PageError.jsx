import { NavLink } from "react-router-dom";
import BuhoUCA from "../images/BuhoUCA.png";
export function PageError() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
        <img src={BuhoUCA} className="w-56" alt="not found uca" />
        <h1 className="text-6xl text-center">404</h1>
        <h2 className="text-4xl text-center">Pagina no encontrada</h2>
        <p className="mx-64 mt-5 text-center">
          Parece que te has aventurado en el territorio nocturno del internet.
          Este camino está tan oscuro como las plumas de un búho en medianoche.
          ¡Vuela de vuelta al camino correcto antes de que la sabiduría de
          nuestros servidores te desoriente!
        </p>
        <NavLink
          to={"/"}
          className="px-5 py-2 mt-5 text-white transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black"
        >
          Volver
        </NavLink>
      </div>
    </div>
  );
}

