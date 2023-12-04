import axios from "axios";

const BASE_URL = "https://mysterious-kilt-lamb.cyclic.app/api/v1/career/";

export const getAllCareers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.status === 200) {
      const careersData = response.data.data;
      const transformedCareers = careersData.map((career) => ({
        ...career,
        name: transformCareerName(career.name),
        colorTag: career.colorTag || "#000000",
      }));
      return transformedCareers;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};

const transformCareerName = (name) => {
  return name
    .replace("Ingeniería", "Ing.")
    .replace("Licenciatura", "Lic.")
    .replace("Profesorado", "Prof.")
    .replace("Técnico", "Tec.");
};
