import { useEffect, useState } from "react";
import { eliminarEntrenador, getEntrenadores } from "../services/entrenadorService";

function EntrenadoresPage(){
    const[entrenadores, setEntrenadores ] = useState([]);
    const cargarLista = () =>{
        getEntrenadores().then((datos) => setEntrenadores(datos))
        .catch((error) => alert("error al cargar", error));
    }

    useEffect(()=>{
        cargarLista();
    },[])

    const handleEliminar = async (id) =>{
        if(window.confirm("¿Estas seguro de dar de baja a este entrenador?")){
            try{
                await eliminarEntrenador(id);
                cargarLista();
            }catch(error){
                alert("Error al eliminar", error);
            }
        }
    }


    return(
        <div>
            <h1>Lista Entrenadores</h1>
        <ul>
            {entrenadores.map((entrenador) =>(
                <li key={entrenador.idEntrenador}>
                    <strong>Nombre:</strong>{entrenador.nombreEntrenador} <br />
                    <strong>Turno:</strong>{entrenador.turno} <br />
                    <strong>Estado:</strong>{entrenador.estado} <br />
                    <button onClick={() => handleEliminar(entrenador.idEntrenador)} style={{backgroundColor : 'red'}}>Dar de baja</button>
                </li>
            ))}
        </ul>
        </div>



    )
}


export default EntrenadoresPage;