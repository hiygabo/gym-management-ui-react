import api from './api';
export const getEstudiantes = async () =>{
    const respuesta = await api.get('/estudiantes')
    return respuesta.data;
}

export const crearEstudiante = async (nuevoEstudiante) =>{
    const respuesta = await api.post('/estudiantes', nuevoEstudiante);
    return respuesta.data;
}

export const eliminarEstudiante = async (id) =>{
    const respuesta = await api.delete(`/estudiantes/${id}`);
    return respuesta.data;
}

export const actualizarEstudiante = async (id, estudianteActualizado) =>{
    const respuesta = await api.put(`/estudiantes/${id}`, estudianteActualizado);
    return respuesta.data;
}