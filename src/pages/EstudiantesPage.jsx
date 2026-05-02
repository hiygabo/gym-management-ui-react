import { useEffect, useState } from "react";
import { getEstudiantes, crearEstudiante, eliminarEstudiante, actualizarEstudiante } from "../services/estudianteService";

function EstudiantesPage(){
  const[estudiantes, setEstudiantes] = useState([]);
  const[formData, setFormData] = useState({
    nombre: '',
    ci: '',
    registroUniversitario: '',
    correo: '',
    telefono: ''
  });

  const [estudianteEditandoId, setEstudianteEditandoId] = useState(null);

  const cargarLista = () =>{
    getEstudiantes().then((datos) => setEstudiantes(datos))
    .catch((error) => console.error("Error al cargar", error))
  }
  useEffect(() =>{
    cargarLista();
  }, [])

  const handleEditar = (estudiante) =>{
    setFormData({
      nombre: estudiante.nombre,
      ci: estudiante.ci,
      registroUniversitario: estudiante.registroUniversitario,
      correo: estudiante.correo,
      telefono: estudiante.telefono
    });
    setEstudianteEditandoId(estudiante.idEstudiante);
  };
  const cancelarEdicion = () => {
    setFormData({ nombre: '', ci: '', registroUniversitario: '', correo: '', telefono: '' });
    setEstudianteEditandoId(null); // Volvemos al MODO CREAR
  };

  const handleChange = (e) =>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      if(estudianteEditandoId != null){
        await actualizarEstudiante(estudianteEditandoId, formData);
        alert("Datos Actualizados Correctamente");
      }else{
        await crearEstudiante(formData);
        alert("Estudiante registrado con exito");
      }
      cancelarEdicion();
      cargarLista();
    }catch(error){
      alert("Error al guardar", error);
    }
  }

  const handleEliminar = async (id) =>{
    if(window.confirm("¿Estas seguro de dar de baja a este estudiante?")){
      try{
        await eliminarEstudiante(id);
        cargarLista();
      }catch(error){
        alert("Error al eliminar", error);
      }
    }
  }

  return(
    <div>
      <h1>{estudianteEditandoId ? "Editar Estudiante" : "Registrar Estudiante"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required/>
        <input type="text" name="ci" value={formData.ci} onChange={handleChange} required />
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
        <input type="text" name="registroUniversitario" value={formData.registroUniversitario} onChange={handleChange}/>
        <input type="text" name="correo" value={formData.correo} onChange={handleChange} required/>
        

        <button type="submit">
          {estudianteEditandoId ? "Editar" : "Registrar "}
        </button>
        {estudianteEditandoId && (
          <button type="button" onClick={cancelarEdicion}>Cancelar</button>
        )}


      </form>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {estudiantes.map((estudiante) =>(
          <li key={estudiante.idEstudiante}>
              <strong>{estudiante.nombre} </strong><br />
              <strong>Carnet de identidad </strong>{estudiante.ci} <br />
              <strong>Telefono</strong>{estudiante.telefono} <br />
              <strong>Regsitro Universitario </strong>{estudiante.registroUniversitario} <br />
              <strong>Correo Institucional </strong>{estudiante.correo} <br />
              <strong>Estado </strong>{estudiante.estado} <br />

              <button onClick={() => handleEliminar(estudiante.idEstudiante)} style={{backgroundColor : 'red'}}>Dar de baja</button>
              <button onClick={() => handleEditar(estudiante)}> Editar</button>
          </li>

        ))}
        <li>

        </li>
      </ul>
    </div>



  );
}

export default EstudiantesPage;