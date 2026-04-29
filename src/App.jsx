import { useEffect, useState } from "react";
import { getEstudiantes } from "./services/estudianteService";

function App(){
  const[estudiantes, setEstudiantes] = useState([]);
  useEffect(()=>{
    getEstudiantes().then((datos)=>{
      setEstudiantes(datos);
    });
  }, [])

  return(
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {estudiantes.map((estudiante) =>(
          <li key={estudiante.idEstudiante}>
              <strong>{estudiante.nombre} </strong><br />
              <strong>Carnet de identidad </strong>{estudiante.ci} <br />
              <strong>Telefono</strong>{estudiante.telefono} <br />
              <strong>Regsitro Universitario </strong>{estudiante.registroUniversitario} <br />
              <strong>Correo Institucional </strong>{estudiante.correo} <br />
              <strong>Estado </strong>{estudiante.estado}
          </li>
        ))}
        <li>

        </li>
      </ul>
    </div>



  );
}

export default App;