import Header from "../components/header/header";
import BannerInfo from "../components/banner-information/BannerInfo";
import Footer from "../components/footer/Footer";

/** Datos quemados de lo que deberia recibir el banner */
const bannerInfo = [
  {
    title: "Ayudandote a realizar tus horas sociales.",
    description:
      "En este portafolio encontraras mis proyectos personales, los cuales he desarrollado con la finalidad de aprender y mejorar mis habilidades como desarrollador web.",
    image:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5351b47488c29f3e4669a0_peep-13.png",
    hasButton: true,
    buttonText: "Ver más",
    isReversed: false,
  },
  {
    title: "Sobre nosotros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53595a7371bb55159fd9a2_peep-66.png",
    hasButton: false,
    buttonText: "",
    isReversed: true,
  },
];

function Index() {
  return (
    <>
      <div className="bg-background-primary font-primary">
        <Header />
        <BannerInfo bannerInformation={bannerInfo} isReversed={false} />
        <Footer />
      </div>
    </>
  );
}

export default Index;
