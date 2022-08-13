import axios from 'axios'


const ORDERAPI = axios.create({ baseURL: "https://derana-back.herokuapp.com/api/dashboard", timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });

export const totalorders = () => ORDERAPI.get('/totalorders');
export const totalsales = () => ORDERAPI.get('/totalsales');
export const averageOrder = () => ORDERAPI.get('/averageorders');


const USERAPI = axios.create({ baseURL: "http://localhost:6007/api/dashboard", timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });

export const totalusers = () => USERAPI.get('/totalusers');


const PRODUCTAPI = axios.create({ baseURL: "http://localhost:6009/api/dashboard", timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });

export const totalcategories = () => PRODUCTAPI.get('/totalcategories');
export const totalproducts = () => PRODUCTAPI.get('/totalproducts');
