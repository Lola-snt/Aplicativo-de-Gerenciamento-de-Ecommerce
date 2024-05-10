import axios from "axios";

const API_KEY = process.env.API_KEY
const URL_API = process.env.URL_API

const authenticate = async (mode, email, password) => {
  try {
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    console.log(response);
    return response.data.idToken;
  } catch (err) {
    console.log(err);
  }
};

export const createUse = async (email, password) => {
  const token = await authenticate("signUp", email, password);
  return token;
};

export const login = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
};
