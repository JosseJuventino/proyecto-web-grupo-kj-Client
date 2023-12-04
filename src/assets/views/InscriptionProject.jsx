import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import ButtonWithIcon from "../components/general/ButtonWithIcon";
import InfoInscriptionProject from "../components/InscriptionProject/InfoInscriptionProject";
import { useNavigate } from "react-router";
function InscriptionProject({ idProject }) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="mt-4 lg:pl-20">
        <div
          className="pl-4 lg:pl-0"
          onClick={() => navigate("/dashboard/projects")}
        >
          <ButtonWithIcon text={"Volver"} icon={"fa-solid fa-arrow-left"} />
        </div>

        <InfoInscriptionProject idProjectInfo={idProject} />
      </div>
      <div></div>
      <Footer />
    </>
  );
}

export default InscriptionProject;
