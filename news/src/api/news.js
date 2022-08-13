import axios from 'axios'


const API = axios.create({ baseURL: 'https://derana-back.herokuapp.com/api/news', timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });


export const getallnews = () => API.get(`/getallnews`);
export const getsportnews = () => API.get(`/getsportnews`);
export const gettechnews = () => API.get(`/gettechnews`);
export const getgallerynews = () => API.get(`/getgallerynews`);
