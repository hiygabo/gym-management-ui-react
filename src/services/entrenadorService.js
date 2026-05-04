import api from './api';

export const getEntrenadores = async () =>{
    const respuesta = await api.get('/Entrenadores')
    return respuesta.data;

}
export const eliminarEntrenador = async (id) =>{
    const respuesta = await api.delete(`/Entrenadores/${id}`);
    return respuesta.data;
}