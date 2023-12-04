import LinksMenu from "./LinksMenu/LinksMenu";
import userPhotoDefault from "../../../assets/images/user_default.jpeg";
import { Link, NavLink } from "react-router-dom";
import logo_uca from "../../../assets/images/logo_uca_blanco.png";
import { useLinks } from "../../../services/linksToAdminChange";
import { CheckIfUserLogin } from "../../../helpers/checkIfUserLogin";
import { auth } from "../../../services/firebase";	

function MenuAdmin() {
  const { setLink } = useLinks();
  const user = CheckIfUserLogin();

  if (user === null) {
    // You can render a loading spinner or any other content while waiting for user authentication.
    return "";
  }
  function changeLink(params) {
    setLink(params);
  }

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      navigate('/login'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex items-center justify-around py-6 bg-black lg:just lg:h-screen md:w-full lg:w-1/4 lg:flex-col md:flex-row">
      <div className="flex flex-row items-center justify-around py-2 text-white rounded-md cursor-pointer lg:px-2 lg:mr-10 lg:m-5 hover:bg-bg-hover-on-black">
        <Link
          className="flex flex-row items-center text-lg"
          to={"crear-proyecto"}
        >
          <img className="hidden w-8 lg:block" src={logo_uca} alt="logo_uca" />
          <p className="hidden mt-2 ml-3 lg:block">Nuevo proyecto</p>
        </Link>
        <i className="text-lg lg:ml-10 fa-solid fa-pen-to-square"></i>
      </div>
      <div className="flex flex-row items-center justify-between h-full lg:flex-col">
        <div className="flex flex-row md:flex-col">
          <LinksMenu
            text={"Inicio"}
            icon={"fa-solid fa-house"}
            link={"inicio"}
            clickEvent={changeLink}
          />
          {/* TODO: Acá se debe crear los links y a donde redigiran */}
          <LinksMenu
            text={"Proyectos"}
            icon={"fa-solid fa-chart-simple"}
            link={"proyects-admin"}
            isCssIcon={false}
            clickEvent={changeLink}
          />
          <LinksMenu
            text={"Circulos de Estudio"}
            link={"circulo-estudio"}
            isCssIcon={true}
            clickEvent={changeLink}
          />
          <LinksMenu
            text={"Inscripciones"}
            link={"inscripcion-admin"}
            icon={"fa-solid fa-users"}
            clickEvent={changeLink}
          />
          <LinksMenu
            text={"Vista de usuario"}
            link={"/dashboard"}
            icon={"fa-solid fa-eye"}
            clickEvent={changeLink}
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center justify-between mx-5 text-white">
            <div className="flex flex-row items-center cursor-pointer">
              <img
                className="w-10 rounded-full"
                src={user.profilePicture}
                alt=""
              />
              <h2 className="hidden ml-4 lg:block">{user.name}</h2>
            </div>
            <NavLink onClick={handleLogout} to="/login">
              <i className="hidden ml-5 text-2xl text-white lg:block fa-solid fa-sign-out-alt hover:text-red-500"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
