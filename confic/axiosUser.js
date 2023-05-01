import axios from "axios";
const token = localStorage.getItem('userToken')
const baseURL= "www.krishnapriya.online"
const instance = axios.create({
  baseURL,
  
  headers: {
    Authorization: `Bearer ${token}`,
    Credentials:true,
  }
});

export default instance;