import { crearRegistro } from "../services/registroService";
import { getPlanes } from "../services/planService";
import { useEffect, useState } from "react";
function RegistroPage(){

    //const [registros, setRegistros] = useState([]);
    const [planes, setPlanes] = useState([]);
    const [formData, setFormData] = useState({
        nombreCliente : '',
        paternoCliente:'',
        maternoCliente: '', 
        correoCliente: '',
        telefonoCliente: '',
        comprobante:'',
        plan:{
            idPlan: ''
        }
    });

    // const cargarLista = () =>{
    //     getRegistros().then((datos)=>setRegistros(datos))
    //     .catch((error) => alert("Error al cargar los registros", error));
    // }
    useEffect(() =>{
        //cargarLista();
        getPlanes().then((datos)=>setPlanes(datos));
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await crearRegistro(formData);
            alert("Registro Creado");
            //cargarLista();
        }catch(error){
            alert("error al guardar", error)
        }
    }
    const handleChange = (e) =>{
        if(e.target.name === "idPlan"){
            setFormData({
                ...formData, plan : {idPlan: e.target.value}
            })
        }else{
            setFormData({
                ...formData,[e.target.name] : e.target.value
            })
        }
    };

    return(

        <div>
            <h1>¡Inscribete ahora mismo!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombreCliente" placeholder="Tu Nombre" value={formData.nombreCliente} onChange={handleChange} required />
                <input type="text" name="paternoCliente" placeholder="Apellido Paterno" value={formData.paternoCliente} onChange={handleChange} required />
                <input type="text" name="maternoCliente" placeholder="Apellido Materno" value={formData.maternoCliente} onChange={handleChange} required />
                <input type="email" name="correoCliente" placeholder="tu@correo.com" value={formData.correoCliente} onChange={handleChange} required />
                <input type="text" name="telefonoCliente" placeholder="Teléfono / Celular" value={formData.telefonoCliente} onChange={handleChange} required />
                <label>Plan: </label>
                <select name="idPlan" value={formData.plan.idPlan} onChange={handleChange} required>
                    <option value="">Elige tu plan:</option>
                    {planes.map((plan)=>(
                        <option key={plan.idPlan} value={plan.idPlan}>
                            {plan.nombrePlan}
                        </option>
                    ))}
                </select>
                <input type="text" name="comprobante" placeholder="Nro de comprobante o enlace" value={formData.comprobante} onChange={handleChange} />

                <button type="submit">
                    Enviar Solicitud
                </button>
            </form>

            

        </div>
    )
}
export default RegistroPage;