import api from './api';

export const getPlanes = async () =>{
    const respuesta = await api.get('/planes');
    return respuesta.data;
}
export const editarPlanes = async (id,planNuevo) =>{
    const respuesta = await api.put(`/planes/${id}`,planNuevo);
    return respuesta.data;
}
export const crearPlan = async (plan) =>{
    const respuesta = await api.post('/planes', plan);
    return respuesta.data;
}
export const eliminarPlan = async (id) =>{
    const respuesta = await api.post(`/planes/${id}`);
    return respuesta.data;
}