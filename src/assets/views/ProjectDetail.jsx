import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import InfoProyect from "../components/InfoProyectActive/InfoProject";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
function ProjectDetail({ project }) {
  return (
    <>
      <Header />
      <div className="mt-4 lg:pl-20">
        <div className="pl-4 lg:pl-0">
          <ButtonWithIcon
            text={"Volver"}
            link="/dashboard"
            icon={"fa-solid fa-arrow-left"}
          />
        </div>
        <InfoProyect info={project} />
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetail;
