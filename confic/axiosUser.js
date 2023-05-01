import axios from "axios";
const token = localStorage.getItem('userToken')
const baseURL= "http://localhost:4000"
const instance = axios.create({
  baseURL,
  
  headers: {
    Authorization: `Bearer ${token}`,
    Credentials:true,
  }
});

export default instance;