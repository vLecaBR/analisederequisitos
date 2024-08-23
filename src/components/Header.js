import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ModelPage.css';



function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/waterfall">Modelo Cascata</Link></li>
          <li><Link to="/incremental">Modelo Incremental</Link></li>
          <li><Link to="/prototyping">Modelo de Prototipagem</Link></li>
          <li><Link to="/spiral">Modelo Espiral</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
