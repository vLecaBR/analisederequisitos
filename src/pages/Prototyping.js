import React from 'react';
import '../styles/ModelPage.css';
import prototypingImage from '../img/prototipagem.jpeg';

function Prototyping() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo de Prototipagem</h1>
      <p className="description">
      
      </p>
      <img src={prototypingImage} alt="Modelo Cascata" className="model-image" />

      <div className="advantages-disadvantages">
        <div className="advantages">
          <h2>Vantagens</h2>
          <p>• Facilita a coleta de feedback dos usuários e stakeholders.</p>
          <p>• Reduz o risco de desenvolver um produto que não atenda às necessidades.</p>
          <p>• Permite ajustes rápidos e eficientes no design e funcionalidades.</p>
        </div>
        <div className="disadvantages">
          <h2>Desvantagens</h2>
          <p>• Pode levar a um escopo mal definido e mudanças frequentes.</p>
          <p>• O custo e o tempo para criar múltiplos protótipos podem aumentar.</p>
          <p>• Risco de o protótipo ser confundido com o produto final pelos stakeholders.</p>
        </div>
      </div>

      <div>
        <h2>Exemplos de empresas</h2>
        <ul>
          <li>Apple</li>
          <li>Adobe</li>
          <li>Uber</li>
          <li>Airbnb</li>
          <li>Spotify</li>
        </ul>
      </div>
    </div>
  );
}

export default Prototyping;
