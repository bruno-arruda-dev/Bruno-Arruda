import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projetos     from './pages/Projetos';
import Experiencia  from './pages/Experiencia';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import ProjetoDisplay from './pages/ProjetoDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoDisplay />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
