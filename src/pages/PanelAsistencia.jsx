import { useState } from "react";
import { marcarAsistencia } from "../services/asistenciaService";

function PanelAsistencia(){
    const [ci, setCi] = useState("");
    const [respuesta, setRespuesta] = useState(null);

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();

    //     try{
    //         const res = await marcarAsistencia(ci);
    //         setRespuesta(res);
    //         setCi("");
    //     }catch(error){
    //         console.log(error);
    //         alert("Error al marcar asistencia", error);
    //     }
    // }


    const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const res = await marcarAsistencia(ci);
        console.log("Respuesta Exitosa de Java:", res); // VER EL DTO
        setRespuesta(res);
        setCi("");
    }catch(error){
        console.error("Error completo", error);
        if (error.response) {
            alert(`El servidor rechazó la petición: ${error.response.status}`);
        } else {
            alert(`Error de red: ${error.message}`);
        }
    }
}
    return(

        <div>
            <h1>Asistencia METAL GYM</h1>
            <p>Ingrese su carnet: </p>

            <form onSubmit={handleSubmit}>

                <input type="text" value={ci} onChange={(e) => setCi(e.target.value)} />
            </form>

            {respuesta && (
                <>
                    <h2>{respuesta.mensaje}</h2>

                    {respuesta.exito && (
                        <>
                            <p>Nombre: {respuesta.nombreCliente}</p>
                            <p>Plan {respuesta.nombrePlan}</p>
                            <h4>{respuesta.diasRestantes} DIAS RESTANTES
                            </h4>
                        </>
                    )}
                </>
            )}
        </div>
    )
}
export default PanelAsistencia;