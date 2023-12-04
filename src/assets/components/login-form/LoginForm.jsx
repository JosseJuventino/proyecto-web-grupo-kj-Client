import logo_uca from "../../../assets/images/logo_uca.png";
import CommonButton from "../common-button/CommonButton";
import ButtonWithIcon from "../general/ButtonWithIcon";
import InputIcon from "./InputIcon";
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../../services/user.service"

function LoginForm() {
  const navigate = useNavigate();
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  //Variables para el login con Google
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

  async function handleLoginGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user) {
        if (user.email.endsWith("@uca.edu.sv")) {
          let usuarioMongo = await getUserByEmail(user.email)
          if(usuarioMongo.isAdmin == true){
          navigate("/administrator/dashboard/inicio")
          }else{
            navigate("/dashboard");
          }
        } else {
          setShowErrorEmail(true);
          navigate("/login");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <form className="flex flex-col items-center h-screen">
        <div className="flex flex-col items-center text-center headerForm">
          <figure className="w-[60%] mt-5">
            <img className="object-cover" src={logo_uca} alt="Logo UCA" />
          </figure>
          <h2 className="mt-5 text-4xl">¡Bienvenido!</h2>
          <h3 className="text-xl">Inicio de sesión</h3>
        </div>
        <div className="flex flex-col items-center mt-10 formContent">
          <div className="cuentasUca">
            <p className="mb-5">Inicia sesión usando tu cuenta:</p>

            <div onClick={handleLoginGoogle}>
              <ButtonWithIcon
                text={"Google Cuentas UCA"}
                icon={"fa-brands fa-google"}
              />
            </div>
          </div>
        </div>
        <div
          className={showErrorEmail ? "flex justify-center absolute" : "hidden"}
        >
          <div className="bg-gray-900 p-5 flex flex-col justify-center">
            <h2 className="text-white">
              Solo puedes iniciar sesion con correo institucional UCA
            </h2>
            <button className="">Aceptar</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
