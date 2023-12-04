import { NavLink } from "react-router-dom";

function ButtonInscribe({ link, text, icon, eventClick }) {
  return (
    <div className="w-full mt-5 cursor-pointer ">
      <NavLink
        to={link}
        className="block mx-10  text-center hover:border-black-custom hover:bg-transparent hover:text-black hover:border-4 px-4 py-2 text-lg rounded-full bg-black-custom text-white transition-colors duration-500 ease-in-out border-black-custom border-4"
        href={link}
        onClick={eventClick}
      >
        {text}
        {icon && <i className={`${icon} ml-3`}></i>}
      </NavLink>
    </div>
  );
}

export default ButtonInscribe;
