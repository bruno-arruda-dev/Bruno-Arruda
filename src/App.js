import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Projetos from './pages/Projetos';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
