import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Waterfall from './pages/Waterfall';
import Incremental from './pages/Incremental';
import Prototyping from './pages/Prototyping';
import Spiral from './pages/Spiral';
import Header from './components/Header';
import Footer from './components/Footer'; // Importa o Footer

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/incremental" element={<Incremental />} />
        <Route path="/prototyping" element={<Prototyping />} />
        <Route path="/spiral" element={<Spiral />} />
      </Routes>
      <Footer /> {/* Adiciona o Footer aqui */}
    </Router>
  );
}

export default App;
