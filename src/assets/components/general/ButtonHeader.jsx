import { NavLink } from "react-router-dom";
import { CheckIfUserLogin } from "../../../helpers/checkIfUserLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";

function ButtonHeader({ text, image }) {
  const user = CheckIfUserLogin();
  const navigate = useNavigate();
  const [closeSession, setCloseSession] = useState(false);

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("isLogged")
    signOut(auth);
    navigate("/login");
  }

  return (
    <>
      <div className="relative">
        <div onClick={() => setCloseSession(!closeSession)}>
          <NavLink
            to={user ? "" : "/login"}
            href="#"
            className="flex flex-row border-transparent border-4 transition-colors duration-500 ease-in-out  justify-between items-center bg-black-custom text-white px-6 py-2 rounded-full hover:bg-hover-black-custom hover:text-black hover:border-black-custom hover:border-4"
          >
            <figure className="w-10">
              <img
                className="rounded-full object-cover"
                src={image}
                alt="user_image"
              />
            </figure>
            <span className="mx-2">
              {text} {user ? (<i className={`fa-solid fa-chevron-${closeSession ? "up" : "down"}`}></i>) : (<></>)}
            </span>
          </NavLink>
        </div>
        {closeSession ? (
          <div className="absolute mt-3 text-center w-full">
            <button onClick={handleLogout} className="bg-red-500 text-red-900 py-2 px-4 rounded-xl hover:bg-red-600 hover:text-white transition-colors duration-500">
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ButtonHeader;
