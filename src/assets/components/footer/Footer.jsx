import LinkFooter from "./linkFooter";
import SocialMedia from "./SocialMedia";
import logo_ucav2 from "../../../assets/images/logo_ucav2.png";

//This is the code for the footer of the page

function Footer() {
  return (
    <>
      <footer className="bg-black flex flex-col flex-start md:flex md:flex-row md:items-center md:justify-evenly pb-7">
        <div className=" text-white flex flex-col items-start md:items-center p-10 md:flex-row">
          <div>
            <h3 className="text-3xl">¡Contactanos!</h3>
            <nav className="flex flex-row justify-start items-center">
              <SocialMedia
                icon="fa-brands fa-instagram"
                link={"https://www.instagram.com/cssuca/?hl=es-la"}
              />
              <SocialMedia
                icon="fa-brands fa-facebook"
                link={"https://www.facebook.com/cssuca"}
              />
              <SocialMedia
                icon="fa-solid fa-globe"
                link={"https://www.uca.edu.sv/servicio-social/"}
              />
            </nav>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:pl-20">
              <LinkFooter
                icon={"fa-solid fa-envelope"}
                text={"00048322@uca.edu.sv"}
              />
              <LinkFooter
                icon={"fa-solid fa-location-dot"}
                text={"Centro de Servicio Social, UCA"}
              />
              <LinkFooter
                icon={"fa-solid fa-phone"}
                text={"2210-6600 Ext. 427 y 2210-6680.A"}
              />
            </div>
          </div>
        </div>
        <figure className="md:w-28 w-20 ml-10 md:ml-10">
          <img src={logo_ucav2} alt="logo" className="object-contain" />
        </figure>
      </footer>
    </>
  );
}

export default Footer;
