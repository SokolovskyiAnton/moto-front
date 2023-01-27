import { ApiService } from '~/services/ApiService';



export const api = new ApiService({ baseURL: 'http://localhost:8000/api', credentials: "include"})