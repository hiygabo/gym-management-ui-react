import api from "./api";

export const marcarAsistencia = async (ci)=>{
    const respuesta = await api.post("/asistencia/marcar", ci, {
        headers: {
            'Content-Type' : 'text/plain'
        }
    });
    return respuesta.data;
}
