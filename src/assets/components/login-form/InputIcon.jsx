import { useState } from "react";
function InputIcon({ icon, placeholder, type, canSubmit }) {

  const [inputError, setInputError] = useState("");

  const createError = (message) => {
    setInputError(
      <span className="error-message">
      <i className="fa-solid fa-circle-exclamation"></i> {message}
    </span>
    );
    canSubmit(false);
  };
  const handleValidateInput = (e) => {
    if(e.target.value.length === 0){
      createError("Este campo es obligatorio");
    }else{
      setInputError("");
      canSubmit(true);
    }
    
    // Validando email, cuando no lleva @algo 
    if (type === "email" && e.target.value.length > 0) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(e.target.value)) {
        createError("El correo ingresado no es válido");
      } else {
        setInputError("");
        canSubmit(true);
      }
    }

    //Validando password, cuando es menor a 8 caracteres
    if (type === "password" && e.target.value.length > 0) {
      if (e.target.value.length < 8) {
        createError("La contraseña debe tener al menos 8 caracteres");
      } else {
        setInputError("");
        canSubmit(true);
      }
    }  
    
    
  }

  return (
    <>
      <div>
        <label htmlFor={placeholder}>
          <i className={icon}></i>
        </label>
        <input
          id={placeholder}
          className="mb-3 bg-transparent border-b-2 p-2 focus:outline-none invalid:border-red-500 invalid:text-red-500"
          type={type}
          onChange={handleValidateInput}
          placeholder={placeholder}
        />

        <p className="text-red-500">{inputError}</p>
        
      </div>
    </>
  );
}

export default InputIcon;
