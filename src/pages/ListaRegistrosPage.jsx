import { useEffect, useState } from "react";
import { getRegistros, aprobarRegistro, rechazarRegistro } from "../services/registroService";
function ListaRegistrosPage(){
    const [registros, setRegistros] = useState([]);

    const cargarLista = () =>{
            getRegistros().then((datos)=>setRegistros(datos))
            .catch((error) => alert("Error al cargar los registros", error));
        }
        useEffect(() =>{
            cargarLista();
        },[])
    

     const handleAprobar = async  (registro) =>{
        if(window.confirm(`¿Estas seguro de aprobar a ${registro.nombreCliente}?`)){
        try{
            await aprobarRegistro(registro.idRegistro);
            alert("Registro y suscripcion generada correctamente");
        }catch(error){
            alert("Ocurrio un problema", error);
        }
    }
}
    const handleRechazar = async (registro) =>{
        if(window.confirm(`¿Estás seguro de rechazar la solicitud de ${registro.nombreCliente}? Se le enviará un correo de notificación.`)) {
            try {
                await rechazarRegistro(registro.idRegistro);
                alert("Solicitud rechazada correctamente. El correo fue enviado.");
                cargarLista(); // Recargamos para que desaparezca de la pantalla
            } catch (error) {
                console.error("Error al rechazar:", error);
                alert("Hubo un error al rechazar la solicitud.");
            }
        }
    }
    return(
        <div>
            <h1>Registros</h1>
            <ul>
                {registros.map((reg)=>(
                    <li key={reg.idRegistro}>
                        <strong>Nombre: {reg.nombreCliente}</strong>
                        <strong>Paterno; {reg.paternoCliente}</strong>
                        <strong>Materno: {reg.maternoCliente}</strong>
                        <strong>Correo; {reg.correo}</strong>
                        <strong>Telefono:{reg.telefono}</strong>
                        <strong>Comprobante: {reg.comprobante}</strong>

                        <button type="button" onClick={() => handleAprobar(reg)}>Aceptar</button>
                        <button onClick={() => handleRechazar(reg)}>Rechazar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}

export default ListaRegistrosPage;