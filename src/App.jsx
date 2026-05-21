import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClientesPage from './pages/ClientesPage';
import InicioPage from './pages/InicioPage';
import EntrenadoresPage from './pages/EntrenadoresPage';
import EquiposPage from './pages/EquiposPage';
import PlanesPage from './pages/PlanesPage';
import ListaRegistrosPage from './pages/ListaRegistrosPage';
import RegistroPage from './pages/RegistroPage';
import PanelAsistencia from './pages/PanelAsistencia';

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
        <Link to="/clientes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Clientes</Link>
        <Link to="/entrenadores" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Entrenadores</Link>
        <Link to="/equipos" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Equipos</Link>
        <Link to="/planes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Planes</Link>
        <Link to="/inscripciones" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Inscripciones</Link>
        <Link to="/listaSolicitudes" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> lista solicitudes</Link>
        <Link to="/asistencia" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}> Asistencia</Link>
        
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />

          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/entrenadores" element={<EntrenadoresPage />}/>
          <Route path="/equipos" element={<EquiposPage />}/>
          <Route path="/planes" element={<PlanesPage/>}/>
          <Route path="/inscripciones" element={<RegistroPage/>}/>
          <Route path="/listaSolicitudes" element={<ListaRegistrosPage/>}/>
          <Route path="/asistencia" element={<PanelAsistencia/>}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;