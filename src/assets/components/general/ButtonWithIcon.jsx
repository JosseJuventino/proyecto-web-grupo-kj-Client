import { NavLink } from "react-router-dom";
function ButtonWithIcon({ text, icon, link }) {
  return (
    <>
      <NavLink
        to={link}
        className="mt-10 border-transparent border-4 transition-colors duration-500 ease-in-out  justify-between items-center bg-black-custom text-white px-6 py-2 rounded-full hover:bg-hover-black-custom hover:text-black hover:border-black-custom hover:border-4"
        rel="noopener noreferrer"
      >
        <i className={icon}></i>
        <span className="ml-3">{text}</span>
      </NavLink>
    </>
  );
}

export default ButtonWithIcon;
