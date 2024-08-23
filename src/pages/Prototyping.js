import React from 'react';
import '../styles/ModelPage.css';

function Prototyping() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo de Prototipagem</h1>
      <p className="description">
        Pense em uma startup que está criando um novo aplicativo de reserva de 
        restaurantes. Eles têm uma ideia geral do que querem, mas não sabem exatamente
        como os usuários vão reagir ao design e à usabilidade. A equipe de desenvolvimento
        cria um protótipo inicial que mostra a interface principal e algumas funcionalidades
        básicas. Os fundadores testam o protótipo, dão feedback, e a equipe faz ajustes. 
        Depois de várias iterações, quando todos estão satisfeitos, o desenvolvimento do 
        produto final começa. Esse uso da Prototipagem é comum em startups, onde a visão 
        do produto pode evoluir rapidamente.
      </p>

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
    </div>
  );
}

export default Prototyping;
