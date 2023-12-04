// Importando librerias
import axios from "axios";
const BASE_URL = "https://kj-api.ironcity.network/api/v1/project/";

export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};

export const createProject = async (formData) => {
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

export const updateProject = async (id, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}${id}`, formData, {
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

export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}`);
    if (response.status === 200) return response.data.data;
    else return {};
  } catch (error) {
    console.log("Error:", error.message);
    return {};
  }
};

export const getProjectByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}titulo/${name}`);
    if (response.status === 200) return response.data.data;
    else return {};
  } catch (error) {
    console.log("Error:", error.message);
    return {};
  }
};
