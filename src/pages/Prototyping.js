import React from 'react';
import '../styles/ModelPage.css';
import prototypingImage from '../img/prototipagem.jpeg';

function Prototyping() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo de Prototipagem</h1>
      <p className="description">
      A prototipagem é um processo de criação de um modelo inicial ou protótipo de um produto ou projeto digital. Esse método é crucial para visualizar ideias e conceitos antes de sua implementação, ajudando a evitar gastos desnecessários e a validar os requisitos essenciais para os usuários. Um protótipo é uma versão preliminar e menos completa de um produto ou sistema, que serve como modelo de teste para verificar e ajustar aspectos importantes antes da criação da versão final.

O modelo de prototipagem baseia-se na criação iterativa de protótipos para explorar e refinar os requisitos do sistema. Ao construir e apresentar protótipos iniciais aos usuários, a equipe de desenvolvimento pode obter feedback valioso, permitindo ajustes contínuos até que o produto final atenda plenamente às expectativas e necessidades do cliente e dos usuários. Esse processo facilita a compreensão dos requisitos e ajuda a identificar e resolver problemas precocemente, diminuindo riscos e custos.

No entanto, a prototipagem pode envolver custos adicionais e potencialmente prolongar o cronograma de entrega, especialmente se as iterações forem frequentes e extensas. Por exemplo, em desenvolvimento de sistemas, é comum a prototipação das telas, permitindo que o usuário "use" o produto final para definir de forma detalhada seus requisitos
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
