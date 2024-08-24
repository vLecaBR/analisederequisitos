import React from 'react';
import '../styles/ModelPage.css';
import cascataImage from '../img/cascata.jpeg';

function Waterfall() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Cascata</h1>
      <p className="description">
      O modelo cascata é uma abordagem tradicional de desenvolvimento de software 
      caracterizada por seu formato linear e sequencial. Neste método, o processo 
      de desenvolvimento é subdividido em fases distintas, com cada fase devendo ser
       completada antes que a próxima possa ser iniciada. A progressão é direta e 
       ordenada, movendo-se de forma vertical, sem a possibilidade de retornar a 
       etapas anteriores. Em essência, o modelo cascata oferece um caminho claro 
       e bem estruturado para o desenvolvimento de software, com etapas definidas 
       e uma sequência rígida.
      </p>
      <img src={cascataImage} alt="Modelo Cascata" className="model-image" />

      <div className="advantages-disadvantages">
        <div className="advantages">
          <h2>Vantagens</h2>
          <p>• Processo linear e simples de seguir.</p>
          <p>• Facilidade em gerenciar e documentar.</p>
          <p>• Claridade nos objetivos e metas do projeto.</p>
        </div>
        <div className="disadvantages">
          <h2>Desvantagens</h2>
          <p>• Pouca flexibilidade para mudanças.</p>
          <p>• Pode ser demorado devido à falta de feedback contínuo.</p>
          <p>• Risco elevado se os requisitos não forem bem definidos.</p>
        </div>
      </div>
      
      <div className='empresa'>
        <h2>Exmplos de empresas</h2>
        <ul>
          <li>NASA</li>
          <li>IBM</li>
          <li>Hewlett-Packard (HP)</li>
          </ul>
      </div>
    </div>
  );
}

export default Waterfall;
