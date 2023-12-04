import { useState } from "react";

function ContactNumber({ icon, placeholder, type, canSubmit }) {
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
    if (e.target.value.length === 0) {
      createError("Este campo es obligatorio");
    } else {
      setInputError("");
      canSubmit(true);

      // Validar solo números y máximo de 8 caracteres
      if (type === "telefono" && e.target.value.length > 0) {
        const regex = /^[0-9]{1,8}$/;
        if (!regex.test(e.target.value)) {
          createError("Este campo solo permite números y hasta 8 dígitos");
        } else {
          setInputError("");
          canSubmit(true);
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className=" lg:mx-3  bg-gray-300 rounded-full flex flex-row  items-center ">
          <label className="px-3" htmlFor={placeholder}>
            <i className={icon}></i>
          </label>
          <input
            id={placeholder}
            className="mb-3 bg-transparent pt-3 focus:outline-none invalid:border-red-500 invalid:text-red-500"
            type={type}
            onChange={handleValidateInput}
            placeholder={placeholder}
          />
        </div>
        <p className="text-red-500 ">{inputError}</p>
      </div>
    </>
  );
}

export default ContactNumber;
