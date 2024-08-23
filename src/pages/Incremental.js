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
    </div>
  );
}

export default Incremental;
