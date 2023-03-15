import { ApiService } from '~/services/ApiService';



export const api = new ApiService({ baseURL: 'https://nest-moto-backend.herokuapp.com/api/'})