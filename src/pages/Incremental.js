import React from 'react';
import '../styles/ModelPage.css';
import incrementalImage from '../img/incremental.jpeg';

function Incremental() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Incremental</h1>
      <p className="description">
      O modelo incremental é uma abordagem de desenvolvimento de software que
       se baseia em construir o sistema em partes. Em vez de criar o produto 
       final de uma vez, começamos com uma versão básica que inclui as funcionalidades
        essenciais. Depois, vamos adicionando novos recursos e melhorias em etapas
         sucessivas. Cada nova parte é desenvolvida, testada e incorporada ao sistema
          existente, permitindo que o software vá evoluindo de forma gradual. Esse modelo
           é vantajoso porque permite entregar uma versão funcional do software mais cedo,
            o que possibilita que os usuários comecem a usá-lo e dar feedback que pode ser
             usado nas próximas atualizações. Em resumo, o modelo incremental oferece uma 
             forma de desenvolver software passo a passo, permitindo ajustes e melhorias 
             contínuas com base nas necessidades dos usuários.
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
