import axios from "axios";
const BASE_URL = "https://mysterious-kilt-lamb.cyclic.app/api/v1/user/";

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    if (response.status === 200) return response.data.data;
    else return {};
  } catch (error) {
    console.log("Error:", error.message);
    return {};
  }
};

export const updateUser = async (mail, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}${mail}`, formData, {
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

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}${email}`);
    if (response.status === 200) return response.data.data;
    else return {};
  } catch (error) {
    console.log("Error:", error.message);
    return {};
  }
};

export const createUser = async (formData) => {
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
