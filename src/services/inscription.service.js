// Importando librerias
import axios from "axios";
const BASE_URL = "https://kj-api.ironcity.network/api/v1/inscription";

export const getInscriptions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};

export const createInscription = async (formData) => {
  console.log(formData);
  try {
    const response = await axios.post(`${BASE_URL}`, formData, {
      headers: {
        "Content-Type": "application/json", // Tipo de contenido
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    throw new Error(
      "Error occurred while creating the movie. Please try again."
    );
  }
};

export const updateInscription = async (email, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}${email}`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    throw new Error(
      "Error occurred while updating the movie. Please try again."
    );
  }
};

export const getInscriptionByEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}${email}`);
    if (response.status === 200) return response.data.data;
    else return {};
  } catch (error) {
    console.log("Error:", error.message);
    return {};
  }
};
