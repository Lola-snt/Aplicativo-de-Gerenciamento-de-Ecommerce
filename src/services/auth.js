import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY
const URL_API = process.env.EXPO_PUBLIC_URL_API

const authenticate = async (mode, email, password) => {
    const url = `${URL_API}${mode}?key=${API_KEY}`
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).then((res) => {
      return res.data.idToken;
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      }
    })
    return response
};

export const createUser = async (email, password) => {
  const token = await authenticate("signUp", email, password);
  return token;
};

export const login = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
};
