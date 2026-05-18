import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EstudiantesPage from './pages/EstudiantesPage';
import InicioPage from './pages/InicioPage';
import EntrenadoresPage from './pages/EntrenadoresPage';
import EquiposPage from './pages/EquiposPage';
import PlanesPage from './pages/PlanesPage';

function App() {
  return (
    <BrowserRouter>
      
      <nav style={{ 
        backgroundColor: '#0056b3', 
        padding: '15px', 
        marginBottom: '20px',
        display: 'flex',
        gap: '20px'
      }}>
        <h3 style={{ color: 'white', margin: '0', paddingRight: '20px' }}>🏋️‍♂️ Gym UMSA</h3>
        
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Inicio</Link>
        <Link to="/estudiantes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Universitarios</Link>
        <Link to="/entrenadores" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Entrenadores</Link>
        <Link to="/equipos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Equipos</Link>
        <Link to="/planes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Planes</Link>
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />

          <Route path="/estudiantes" element={<EstudiantesPage />} />
          <Route path="/entrenadores" element={<EntrenadoresPage />}/>
          <Route path="/equipos" element={<EquiposPage />}/>
          <Route path="/planes" element={<PlanesPage/>}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;