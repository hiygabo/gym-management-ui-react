import api from "./api";

export const getClientes = async () => {
    const respuesta = await api.get('/Clientes');
    return respuesta.data;
}

export const editarCliente = async (id, cliente) => {
    const respuesta = await api.put(`/Clientes/${id}`, cliente);
    return respuesta.data;
}

export const eliminarCliente = async (id) => {
    const respuesta = await api.delete(`/Clientes/${id}`);
    return respuesta.data;
}