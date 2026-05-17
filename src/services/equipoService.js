import api from './api';

export const getEquipos = async () =>{
    const respuesta = await api.get('/equipo');
    return respuesta.data;
}
export const crearEquipo = async (nuevoEquipo) =>{
    const respuesta = await api.post('/equipo', nuevoEquipo);
    return respuesta.data;
}

export const actualizarEquipo = async (id, equipoActualizado)=>{
    const respuesta = await api.put(`/equipo/${id}`, equipoActualizado);
    return respuesta.data
}