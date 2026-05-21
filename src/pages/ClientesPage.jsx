import { useEffect, useState } from "react";
import { getClientes, editarCliente, eliminarCliente } from "../services/clienteService";


function ClientesPage(){
    const[clientes, setClientes] = useState([]);
    const[formData, setFormData] = useState({
        nombre: '',
        paterno: '',
        materno: '',
        ci:'',
        telefono: '',
        correo: '',
        estado: ''
    });

    const [clienteEditandoId, setClienteEditandoId] = useState(null);

    const cargarLista = () =>{
        getClientes().then((datos)=> setClientes(datos))
        .catch((error)=> console.error("Error al cargar", error))
    }
    useEffect(() =>{
        cargarLista();
    },[])


    const handleEditar = (cliente) =>{
        setFormData({
            nombre: cliente.nombre,
            paterno: cliente.paterno,
            materno: cliente.materno,
            ci: cliente.ci,
            telefono: cliente.telefono,
            correo: cliente.correo,
            estado: cliente.estado
        })
        setClienteEditandoId(cliente.idCliente)
    };

    const cancelarEdicion = () =>{
        setFormData({
            nombre: '',
            paterno: '',
            materno: '',
            ci:'',
            telefono: '',
            correo: '',
            estado: ''
        })

        setClienteEditandoId(null);
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData, [e.target.name] : e.target.value
        })
    };


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await editarCliente(clienteEditandoId, formData);
            alert("Datos actualizados correctamente");
            cancelarEdicion();
            cargarLista();
        }catch(error){
            alert("Error al guardar", error);
        }
    }

    const handleEliminar = async (idCliente) =>{
        if (window.confirm("¿Estas seguro de dar de baja a este cliente?")){
            try{
                await eliminarCliente(idCliente);
                cargarLista();
            }catch(error){
                alert("Error al eliminar", error)
            }
        }
    }

    return(
        <div>
            <h1>Editar Cliente</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                <input type="text" name="paterno" value={formData.paterno} onChange={handleChange} />
                <input type="text" name="materno" value={formData.materno} onChange={handleChange} />
                <input type="text" name="ci" value={formData.ci} onChange={handleChange} />
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
                <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
                <button type="submit">Guardar</button>
                <button type="button" onClick={cancelarEdicion}>Cancelar</button>
            </form>

            <h1>Lista de Clientes</h1>
            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.idCliente}>
                        {cliente.nombre} {cliente.paterno} {cliente.materno} - CI: {cliente.ci} - Tel: {cliente.telefono} - Correo: {cliente.correo} - Estado: {cliente.estado}
                        <button onClick={() => handleEditar(cliente)}>Editar</button>
                        <button onClick={() => handleEliminar(cliente.idCliente)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>



    )
}
export default ClientesPage;