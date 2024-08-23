import React from 'react';
import '../styles/ModelPage.css';

function Incremental() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Incremental</h1>
      <p className="description">
        Pense em uma empresa de tecnologia desenvolvendo um novo software para gestão de projetos. 
        Eles começam com um conjunto básico de funcionalidades, como criar tarefas, atribuí-las a 
        membros da equipe e acompanhar prazos. Essa primeira versão é lançada, e depois eles vão 
        adicionando novos recursos, como integrações com outras ferramentas, relatórios detalhados 
        e comunicação em tempo real. O software vai crescendo aos poucos, sempre entregando novas 
        funcionalidades para os usuários, o que é típico do modelo Incremental.
      </p>

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
