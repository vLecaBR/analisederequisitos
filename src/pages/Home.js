import React from 'react';
import ModelCard from '../components/ModelCard';
import '../styles/ModelPage.css';
import { Link } from 'react-router-dom';

// Importando as imagens
import cascataImage from '../img/cascata.jpeg';
import incrementalImage from '../img/incremental.jpeg';
import prototypingImage from '../img/prototipagem.jpeg';
import spiralImage from '../img/espiral.jpeg';

function Home() {
  return (
    <div className="home">
      <h1>Modelos de Desenvolvimento de Software</h1>
      <div className="model-grid">
      <Link to="/waterfall"><ModelCard 
          title="Modelo Cascata" 
          description="Um modelo linear onde cada fase deve ser concluída antes da próxima começar." 
          imageUrl={cascataImage} 
        />
        </Link>
        <Link to="/incremental">
        <ModelCard 
          title="Modelo Incremental" 
          description="Desenvolvimento em incrementos, onde cada versão adiciona funcionalidades." 
          imageUrl={incrementalImage} 
        />
        </Link>
        <Link to="/prototyping">
        <ModelCard 
          title="Modelo de Prototipagem" 
          description="Criação de protótipos para refinar requisitos antes do desenvolvimento final." 
          imageUrl={prototypingImage} 
        />
        </Link>
        <Link to="/spiral">
        <ModelCard 
          title="Modelo Espiral" 
          description="Combina elementos de cascata e prototipagem em uma abordagem iterativa." 
          imageUrl={spiralImage} 
        />
        </Link>
      </div>
    </div>
  );
}

export default Home;
