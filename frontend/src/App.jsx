import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';  
import Problematica from './componentes/problematica';  
import Silabario from './componentes/silabario';  
import Guias from './componentes/guias';  
import Dato from './componentes/dato';  


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para el Home */}
          <Route path="/" element={<Home />} />

          {/* Ruta para el componente Problemática */}
          <Route path="/problematica" element={<Problematica />} />
          <Route path="/silabario" element={<Silabario />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/dato" element={<Dato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
