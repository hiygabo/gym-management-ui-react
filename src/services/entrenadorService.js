import api from './api';

export const getEntrenadores = async () =>{
    const respuesta = await api.get('/Entrenadores')
    return respuesta.data;

}