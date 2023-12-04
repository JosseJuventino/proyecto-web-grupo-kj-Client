import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { CheckIfUserLogin } from "../../helpers/checkIfUserLogin";
import CardContainer from "../components/cardsInfo/CardContainer";
import { getProjectById } from "../../services/project.service";
import buhoBrokenHeart from "../images/buhoBrokenHeart.png";
import CommonButton from "../components/common-button/CommonButton";

function Favorites() {
  const user = CheckIfUserLogin();
  const [projectsFav, setProjectsFav] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (user) {
        let favoritosUid = user.projectFavorites;

        if (favoritosUid != null) {
          try {
            const projects = await Promise.all(
              favoritosUid.map((id) => getProjectById(id))
            );
            setProjectsFav(projects.filter((project) => project !== null));
          } catch (error) {
            console.error("Error fetching projects:", error);
            setProjectsFav([]);
          }
        } else {
          setProjectsFav([]);
        }
      }
    };

    fetchProjects();
  }, [user]);

  return (
    <div>
      <Header isLoggedIn={true} />

      {projectsFav.length > 0 ? (
        <div>
          <h1 className="text-center text-3xl">Mis favoritos</h1>
          <CardContainer
            text=""
            hasButton={false}
            type="active"
            projectsActives={projectsFav}
            needMorePage={false}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <img className="w-52" src={buhoBrokenHeart} alt="buhoBrokenHeart" />
          <h2 className="text-center text-2xl mt-10 mx-28">
            Oops, parece que nuestro búho social está sintiendo la soledad. 🦉
            ¡Vamos a llenar su corazón de proyectos que marquen la diferencia!
          </h2>
          <CommonButton link="/dashboard/projects" text="Explorar proyectos" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Favorites;