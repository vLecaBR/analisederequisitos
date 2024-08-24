import React from 'react';
import '../styles/ModelPage.css';
import prototypingImage from '../img/prototipagem.jpeg';

function Prototyping() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo de Prototipagem</h1>
      <p className="description">
      O modelo de prototipagem é uma abordagem prática para o desenvolvimento de software 
      que começa com a criação de uma versão preliminar do sistema. Em vez de tentar desenvolver
       o produto final de uma vez, começamos com um protótipo que é testado e ajustado com base
        no feedback dos usuários. Cada nova versão do protótipo é refinada e melhorada até chegarmos
         ao produto final. Esse método é muito útil porque permite que os usuários vejam e experimentem
          o sistema nas suas fases iniciais, o que ajuda a garantir que o resultado final realmente 
          atenda às suas necessidades. Em essência, o modelo de prototipagem é uma forma flexível e
           prática de criar software, facilitando ajustes contínuos e alinhamento com as expectativas 
           dos usuários.
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
