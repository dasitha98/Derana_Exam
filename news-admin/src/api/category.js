import axios from 'axios'


const API = axios.create({ baseURL: 'https://derana-back.herokuapp.com/api/category', timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });


API.interceptors.request.use((req) => {
    if(localStorage.getItem('accessToken')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('accessToken')).token}`;
    }

    return req;
});

export const addcategory = (formData) => API.post('/add', formData);
export const getcategory = () => API.get(`/get`);

