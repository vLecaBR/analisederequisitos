import React from 'react';
import '../styles/ModelPage.css';
import spiralImage from '../img/espiral.jpeg';

function Spiral() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Espiral</h1>
      <p className="description">
      O modelo espiral combina evolução contínua com um formato estruturado para 
      desenvolvimento de software. Imagine um ciclo contínuo onde o projeto passa 
      por etapas como planejamento, análise de risco, desenvolvimento e avaliação 
      a cada passo. Em vez de seguir uma linha reta, como no modelo em cascata, o 
      modelo em espiral gira em torno de um ciclo repetitivo. Isso permite que a 
      equipe revise e aprimore o projeto com base nas informações recebidas e nas 
      coisas novas que aprendem em cada rodada. Em sua essência, o modelo espiral 
      oferece uma maneira flexível e dinâmica de criar software, facilitando ajustes
       e melhorias à medida que avançam.
      </p>
      <img src={spiralImage} alt="Modelo Cascata" className="model-image" />

      <div className="advantages-disadvantages">
        <div className="advantages">
          <h2>Vantagens</h2>
          <p>• Alta capacidade de adaptação a mudanças e novos requisitos.</p>
          <p>• Foco na identificação e mitigação de riscos em cada ciclo.</p>
          <p>• Permite revisões contínuas e melhorias no produto ao longo do tempo.</p>
        </div>
        <div className="disadvantages">
          <h2>Desvantagens</h2>
          <p>• Pode ser um processo complexo e demorado de gerenciar.</p>
          <p>• Requer uma equipe experiente em gerenciamento de riscos.</p>
          <p>• Custo elevado devido ao ciclo contínuo de desenvolvimento e testes.</p>
        </div>
      </div>

      <div>
        <h2>Exemplos de empresas</h2>
        <ul>
          <li>Microsoft</li>
          <li>IBM</li>
          <li>Oracle</li>
          <li>Google</li>
        </ul>
      </div>
    </div>
  );
}

export default Spiral;
