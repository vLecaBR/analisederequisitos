import React from 'react';
import ModelCard from '../components/ModelCard';
import '../styles/ModelPage.css';

function Home() {
  return (
    <div className="home">
      <h1>Modelos de Desenvolvimento de Software</h1>
      <div className="model-grid">
        <ModelCard 
          title="Modelo Cascata" 
          description="Um modelo linear onde cada fase deve ser concluída antes da próxima começar." 
          imageUrl="/images/waterfall.png" 
        />
        <ModelCard 
          title="Modelo Incremental" 
          description="Desenvolvimento em incrementos, onde cada versão adiciona funcionalidades." 
          imageUrl="/images/incremental.png" 
        />
        <ModelCard 
          title="Modelo de Prototipagem" 
          description="Criação de protótipos para refinar requisitos antes do desenvolvimento final." 
          imageUrl="/images/prototyping.png" 
        />
        <ModelCard 
          title="Modelo Espiral" 
          description="Combina elementos de cascata e prototipagem em uma abordagem iterativa." 
          imageUrl="/images/spiral.png" 
        />
        
      </div>
    </div>
  );
}

export default Home;
