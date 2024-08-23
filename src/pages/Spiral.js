import React from 'react';
import '../styles/ModelPage.css';
import spiralImage from '../img/espiral.jpeg';

function Spiral() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Espiral</h1>
      <p className="description">
        Imagine que uma equipe de engenheiros está trabalhando em um sistema
        de monitoramento para uma usina nuclear. Dada a complexidade e os riscos
        envolvidos, eles começam com um planejamento cuidadoso, identificando 
        possíveis problemas antes de começar a codificar. Em cada ciclo, eles 
        desenvolvem uma parte do sistema, testam rigorosamente e fazem ajustes
        conforme necessário. Esse processo se repete, sempre focando na mitigação
        de riscos, o que torna o modelo Espiral ideal para esse tipo de projeto sensível.
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
