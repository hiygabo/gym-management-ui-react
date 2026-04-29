import api from './api';
export const getEstudiantes = async () =>{
    const respuesta = await api.get('/estudiantes')
    return respuesta.data;
}