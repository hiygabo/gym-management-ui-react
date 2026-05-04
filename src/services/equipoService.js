import api from './api';

export const getEquipos = async () =>{
    const respuesta = await api.get('/equipo');
    return respuesta.data;
}