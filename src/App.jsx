import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EstudiantesPage from './pages/EstudiantesPage';
import InicioPage from './pages/InicioPage';

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
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />

          <Route path="/estudiantes" element={<EstudiantesPage />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;