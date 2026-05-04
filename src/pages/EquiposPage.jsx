import { getEquipos } from "../services/equipoService";
import { useState, useEffect } from "react";
function EquiposPage(){
    const[equipos, setEquipos] = useState([]);


    const cargarLista = () =>{
        getEquipos().then((datos)=> setEquipos(datos))
        .catch((error) => alert("Error al cargar equipos", error));
    }
    useEffect(()=>{
        cargarLista();
    },[]);

    return(

        <div>
            <h1>Lista de Equipos</h1>
            <ul>
                {equipos.map((equipo)=>(
                    <li key={equipo.idMaquina}>
                        <strong>Nombre:</strong>{equipo.nombre} <br />
                        <strong>marca:</strong>{equipo.marca} <br />
                        <strong>catidad:</strong>{equipo.cantidad} <br />
                        <strong>Estado:</strong>{equipo.estado} <br />
                        <strong>categoria</strong>{equipo.categoria.nombreCategoria}
                    </li>
                ))}
            </ul>
        </div>

    )

}
export default EquiposPage;