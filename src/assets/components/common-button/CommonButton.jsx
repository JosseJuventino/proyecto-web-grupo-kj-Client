import { NavLink } from "react-router-dom";

function CommonButton({ link, text, icon }) {
  return (
    <div className="my-7 cursor-pointer ">
      <NavLink
        to={link}
        className=" text-center hover:border-black-custom hover:bg-transparent hover:text-black hover:border-4 px-4 py-2 text-lg rounded-full bg-black-custom text-white transition-colors duration-500 ease-in-out border-black-custom border-4"
        href={link}
      >
        {text}
        {icon && <i className={`${icon} ml-3`}></i>}
      </NavLink>
    </div>
  );
}

export default CommonButton;
