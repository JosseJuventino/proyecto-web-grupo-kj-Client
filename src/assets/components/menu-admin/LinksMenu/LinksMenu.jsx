//import a svg image
import CssIcon from "../../../../assets/images/CssIcon.svg";
import { Link } from "react-router-dom";

function LinksMenu({ text, link, icon, isCssIcon, clickEvent }) {
  return (
    <>
      <Link  to={link}
        className="transition duration-500 cursor-pointer hover:bg-black"
      >
        <div className="flex flex-row items-center justify-start w-full px-5 py-5 text-xl text-white ">
          {isCssIcon ? (
            <img src={CssIcon} alt="CssIcon" className="w-8 h-8" />
          ) : (
            <i className={`mr-3 ${icon} text-2xl text-white`}></i>
          )}

          <p className="hidden ml-3 lg:block">{text}</p>
        </div>
      </Link>
    </>
  );
}

export default LinksMenu;
