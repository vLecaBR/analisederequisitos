import React from 'react';
import '../styles/ModelPage.css';
import incrementalImage from '../img/incremental.jpeg';

function Incremental() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Incremental</h1>
      <p className="description">
      
      </p>
      <img src={incrementalImage} alt="Modelo Cascata" className="model-image" />

      <div className="advantages-disadvantages">
        <div className="advantages">
          <h2>Vantagens</h2>
          <p>• Permite a entrega rápida de versões iniciais do produto.</p>
          <p>• Fácil adaptação a mudanças e novas necessidades.</p>
          <p>• Redução de riscos através de entregas incrementais.</p>
        </div>
        <div className="disadvantages">
          <h2>Desvantagens</h2>
          <p>• Requer bom planejamento para evitar retrabalho.</p>
          <p>• Pode resultar em um produto final inconsistente se não for bem gerido.</p>
          <p>• Mais difícil de gerenciar conforme o produto cresce.</p>
        </div>
      </div>

      <div>
        <h2>Exemplos de empresas</h2>
        <ul>
          <li>Amazon</li>
          <li>Microsoft</li>
          <li>Salesforce</li>
          <li>Atlassian</li>
          <li>Trello</li>
        </ul>
      </div>
    </div>
  );
}

export default Incremental;
