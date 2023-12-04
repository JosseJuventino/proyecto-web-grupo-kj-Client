import { useState, Fragment } from "react";

const Time = ({ title, options }) => {
  /*const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };*/

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    console.log(selectedOptions);
  };

  return (
    <div className="flex flex-col mt-4">
      <div>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-2 gap-5 mt-4">
        {options.map((option, index) => (
          <Fragment key={index}>
            <input
              type="checkbox"
              key={index}
              id={option}
              className="hidden"
              //onClick={() => handleOptionClick(option)}
              onClick={() => handleOptionClick(option)}
              value={option}
            />
            <label
              htmlFor={option}
              className={
                "text-center hover:border-black-custom hover:bg-transparent hover:text-black hover:border-4 px-4 py-2 text-sm rounded-full bg-black-custom text-white transition-colors duration-500 ease-in-out border-black-custom border-4"
              }
            >
              {option}
            </label>
            
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Time;
