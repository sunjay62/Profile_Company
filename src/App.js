import Navbar from './components/navbar/Navbar';
import Remala from './pages/remala/Remala';
import Fibermedia from './pages/fibermedia/Fibermedia';
import Pccyber from './pages/pccyber/Pccyber';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accelworks from './pages/accelworks/Accelworks';
import Saas from './pages/saas/Saas';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/remala" element={<Remala />} />
          <Route path="/fibermedia" element={<Fibermedia />} />
          <Route path="/pc24cyber" element={<Pccyber />} />
          <Route path="/accelworks" element={<Accelworks />} />
          <Route path="/saas" element={<Saas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
