import api from "./api";

export const getRegistros = async () =>{
    const respuesta = await api.get('/registro-cliente')
    return respuesta.data;
}

export const crearRegistro = async () =>{
    const respuesta = await api.post('/registro-cliente');
    return respuesta.data;
}