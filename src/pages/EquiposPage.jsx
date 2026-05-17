import { actualizarEquipo, crearEquipo, getEquipos } from "../services/equipoService";
import { getCategorias } from "../services/categoriaService";
import { useState, useEffect } from "react";
function EquiposPage(){
    const[equipos, setEquipos] = useState([]);
    const[categorias, setCategorias] = useState([]);
    const[formData,setFormData] = useState({
        nombre: '',
        marca: '',
        cantidad: '',
        estado: '',
        categoria: {
            idCategoria: ''
        }
    });
    const[equipoEditandoId, setEquipoEditandoId]= useState(null);

    const cargarLista = () =>{
        getEquipos().then((datos)=> setEquipos(datos))
        .catch((error) => alert("Error al cargar equipos", error));
    }
    useEffect(()=>{
        cargarLista();
        // getCategorias().then((datos)=> setCategorias(datos));
        getCategorias().then((datos)=> {
          console.log("Datos de categorias desde Java:", datos); // <-- EL CHIVATO
          setCategorias(datos);
      });
    },[]);

    const handleEditar =  (equipo) =>{
        setFormData({
            nombre: equipo.nombre,
            marca: equipo.marca,
            cantidad: equipo.cantidad,
            estado: equipo.estado,
            categoria: {idCategoria : equipo.categoria ? equipo.categoria.idCategoria : ''}
        });
        setEquipoEditandoId(equipo.idMaquina);
    };
    const cancelarEdicion = () =>{
        setFormData({
            nombre: '',
            marca: '',
            cantidad: '',
            estado: '',
            categoria:{idCategoria : ''}
        });
        setEquipoEditandoId(null);
    };
    const handleChange = (e) =>{
        if(e.target.name === "idCategoria"){
            setFormData({
                ...formData, categoria : {idCategoria : e.target.value}
            });
        }else{
           setFormData({
            ...formData,[e.target.name]:e.target.value
        });
        }
        
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(equipoEditandoId != null){
                await actualizarEquipo(equipoEditandoId, formData);
                alert("Datos actualizados correctamente");
            }else{
                await crearEquipo(formData);
                alert("Equipo registrado con exito");
            }
            cancelarEdicion();
            cargarLista();
        }catch(error){
            alert("Error al guardar", error);
        }
    }


    return(

        <div>

            <h1>{equipoEditandoId ? "Editar maquina" : "Registrar maquina/equipo"}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                <input type="text" name="marca" value={formData.marca} onChange={handleChange} required/>
                <input type="text" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
                <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />
                <label>Categoria: </label>
                <select name="idCategoria" value={formData.categoria.idCategoria} onChange={handleChange} required>
                    <option value="">Seleccionar categoria</option>
                    {categorias.map((cat)=>(
                        <option key={cat.idCategoria} value={cat.idCategoria}>{cat.nombreCategoria}</option>
                    ))}
                </select>
                <button type="submit">
                    {equipoEditandoId ? "Editar" : "Registrar"}
                </button>
                <button type="button" onClick={cancelarEdicion}>Cancelar</button>
            </form>
            <h1>Lista de Equipos</h1>
            <ul>
                {equipos.map((equipo)=>(
                    <li key={equipo.idMaquina}>
                        <strong>Nombre:</strong>{equipo.nombre} <br />
                        <strong>marca:</strong>{equipo.marca} <br />
                        <strong>catidad:</strong>{equipo.cantidad} <br />
                        <strong>Estado:</strong>{equipo.estado} <br />
                        <strong>categoria</strong>{equipo.categoria?.nombreCategoria}

                        <button onClick={() => handleEditar(equipo)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>

    )

}
export default EquiposPage;