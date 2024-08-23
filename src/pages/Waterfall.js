import React from 'react';
import '../styles/ModelPage.css';
import cascataImage from '../img/cascata.jpeg';

function Waterfall() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Cascata</h1>
      <p className="description">
        Imagine que uma escola decidiu desenvolver um sistema para gerenciar 
        as notas e frequência dos alunos. Eles sabem exatamente o que precisam: 
        registrar dados dos alunos, calcular médias, gerar relatórios, e por aí 
        vai. O projeto começa com uma fase de levantamento de requisitos detalhada, 
        depois segue para o design do sistema, implementação, testes e, finalmente, 
        a entrega do sistema completo. Como tudo estava bem definido desde o início, 
        o modelo Cascata se encaixa bem nesse cenário.
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
