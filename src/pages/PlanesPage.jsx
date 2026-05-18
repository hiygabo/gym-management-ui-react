import { useEffect, useState } from "react";
import { getPlanes, editarPlanes, eliminarPlan, crearPlan  } from "../services/planService";

function PlanesPage(){
    const[planes, setPlanes] = useState([]);
    const[formData, setFormData] = useState({
        nombrePlan: ''
    });

    const[planEditandoId, setPlanEditandoId] = useState(null);

    const cargarLista = () =>{
        getPlanes().then((datos) => setPlanes(datos)).catch((error) => console.error("error al cargar", error))
    }
    useEffect(() =>{
        cargarLista();
    },[])

    const handleEditar =  (plan) =>{
        setFormData({
            nombrePlan: plan.nombrePlan
        })
        setPlanEditandoId(plan.idPlan);
    };
    const cancelarEdicion = () =>{
        setFormData({
            nombrePlan: ''
        })
        setPlanEditandoId(null);
    };

    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name] : e.target.value
        });
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(planEditandoId != null){
                await editarPlanes(planEditandoId, formData);
                alert("Datos actualizados correctamente");
            }else{
                await crearPlan(formData);
                alert("Plan registrado exitosamente");
            }
            cancelarEdicion();
            cargarLista();
        } catch(error){
        alert("error al guardar", error);
    }

}
    const handleEliminar = async (id) =>{
        if(window.confirm("¿Estas seguro de eliminar este plan?")){
            try{
                await eliminarPlan(id);
                cargarLista();
            }catch(error){
                alert("Error al eliminar", error);
            }
        }
    }

    return(
        <div>
            <h1>{planEditandoId ? "Editar plan" : "Registrar plan"}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombrePlan" value={formData.nombrePlan} onChange={handleChange} required/>
                <button type="submit">
                {planEditandoId ? "Editar" : "Registrar"}
            </button>
            {planEditandoId && (
                <button type="button" onClick={cancelarEdicion}>Cancelar</button>
            )}
            </form>

            <h1>Planes disponibles</h1>
            <ul>
                {planes.map((plan)=>(
                    <li key={plan.idPlan}>
                        <strong>Plan: {plan.nombrePlan}</strong>
                        <button onClick={() => handleEliminar(plan.idPlan)}>Eliminar</button>
                        <button onClick={() => handleEditar(plan)}>Editar</button>

                    </li>
                ))}
            </ul>
            
        </div>

    )



    
}
export default PlanesPage;