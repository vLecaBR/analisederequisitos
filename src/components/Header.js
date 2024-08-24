import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ModelPage.css';



function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/waterfall">Cascata</Link></li>
          <li><Link to="/incremental">Incremental</Link></li>
          <li><Link to="/prototyping">Prototipagem</Link></li>
          <li><Link to="/spiral">Espiral</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
