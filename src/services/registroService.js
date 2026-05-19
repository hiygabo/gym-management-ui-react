import api from "./api";

export const getRegistros = async () =>{
    const respuesta = await api.get('/registro-cliente')
    return respuesta.data;
}

export const crearRegistro = async (formData) =>{
    const respuesta = await api.post('/registro-cliente',formData);
    return respuesta.data;
}

export const aprobarRegistro = async (id) =>{
    const respuesta = await api.post(`/registro-cliente/${id}/aprobar`)
    return respuesta.data;
}

export const rechazarRegistro = async (id) =>{
    const respuesta = await api.post(`/registro-cliente/${id}/rechazar`);
    return respuesta.data;
}