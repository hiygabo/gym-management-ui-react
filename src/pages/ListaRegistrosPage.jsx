import { useEffect, useState } from "react";
import { getRegistros } from "../services/registroService";
function ListaRegistrosPage(){
    const [registros, setRegistros] = useState([]);

    const cargarLista = () =>{
            getRegistros().then((datos)=>setRegistros(datos))
            .catch((error) => alert("Error al cargar los registros", error));
        }
        useEffect(() =>{
            cargarLista();
        },[])
    return(
        <div>
            <h1>Registros</h1>
            <ul>
                {registros.map((reg)=>(
                    <li key={reg.idRegistro}>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
export default ListaRegistrosPage;