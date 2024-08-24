import React from 'react';
import '../styles/ModelPage.css';
import spiralImage from '../img/espiral.jpeg';

function Spiral() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Espiral</h1>
      <p className="description">
      O Modelo em Espiral combina elementos do Modelo Incremental e do Modelo de Prototipagem, com um foco especial na gestão de riscos e na evolução contínua do projeto. Este modelo é baseado em uma série de ciclos ou "espirais", onde cada iteração é dividida em quatro fases principais:
<ul>
  <li>Definição de Objetivos e Planejamento: Nesta fase, os objetivos do projeto são estabelecidos e um plano é desenvolvido para alcançá-los.</li>
  <li>Análise de Riscos: São identificados e avaliados os riscos associados ao projeto, com o objetivo de mitigá-los.</li>
  <li>Desenvolvimento e Teste: O desenvolvimento do sistema ocorre com base nos objetivos definidos, seguido de testes para verificar a conformidade com os requisitos.</li>
  <li>Avaliação e Revisão: O projeto é revisado e ajustado com base no feedback recebido e na análise de riscos, permitindo adaptações conforme novas informações surgem.</li>
</ul>
Cada volta no espiral representa uma iteração completa dessas fases, e o processo é repetido quantas vezes forem necessárias até que o software esteja pronto para entrega. Esse modelo é especialmente eficaz para projetos complexos e de grande escala, onde os requisitos podem evoluir e a gestão de riscos é crucial.

Diferente do Modelo Incremental, que entrega partes prontas do software uma de cada vez, o Modelo em Espiral é mais iterativo e busca refinamentos sucessivos. Ele incorpora conceitos de prototipagem e gestão de riscos para permitir uma adaptação contínua às mudanças. Embora ofereça uma abordagem flexível e adaptativa, o Modelo em Espiral pode resultar em custos mais altos e exigir um gerenciamento mais complexo devido à sua natureza iterativa e à necessidade de revisões frequentes.
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
