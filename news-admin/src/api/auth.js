import axios from 'axios'


const API = axios.create({ baseURL: 'https://derana-back.herokuapp.com/api/user', timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });



export const signup = (formData) => API.post('/signup', formData);
export const signin = (formData) => API.post('/signin', formData);
export const tokenlink = (formData) => API.post('/tokenlink', formData);

export const getusers = () => API.get(`/get`);
