import axios from 'axios'


const API = axios.create({ baseURL: 'https://derana-back.herokuapp.com/api/news', timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });


export const addnews = (formData) => API.post('/addnews', formData);
export const getallnews = () => API.get(`/getallnews`);
export const getsportnews = () => API.get(`/getsportnews`);
export const gettechnews = () => API.get(`/gettechnews`);
export const getgallerynews = () => API.get(`/getgallerynews`);
export const updatenews = (id, formData) => API.put(`/updatenews/${id}`, formData);
export const getnews = (id) => API.get(`/getnews/${id}`);
export const deletenews = (id) => API.delete(`/deletenews/${id}`);


