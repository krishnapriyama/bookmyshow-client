import axios from "axios";
const token = localStorage.getItem('userToken')
const baseURL= "https://www.krishnapriya.online/"
const instance = axios.create({
  baseURL,
  
  headers: {
    Authorization: `Bearer ${token}`,
    Credentials:true,
  }
});

export default instance;