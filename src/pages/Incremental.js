import React from 'react';
import '../styles/ModelPage.css';
import incrementalImage from '../img/incremental.jpeg';

function Incremental() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Incremental</h1>
      <p className="description">
      O Modelo Incremental surgiu como uma evolução do Modelo Cascata, oferecendo uma abordagem mais flexível e adaptável ao desenvolvimento de software. Em vez de especificar e desenvolver todo o sistema de uma só vez, o Modelo Incremental trabalha com incrementos, ou seja, desenvolve e entrega o software em pequenas partes, ou versões, ao longo do tempo. Cada incremento representa um conjunto de funcionalidades que adiciona valor ao sistema e é liberado para uso.

O primeiro incremento, muitas vezes chamado de “núcleo do produto”, contém os requisitos básicos necessários para que o sistema funcione e atenda minimamente às necessidades do cliente. A partir daí, novas versões são desenvolvidas e lançadas, cada uma trazendo melhorias e novos recursos até que o sistema esteja completo e adequado para a versão final.

Diferente do Modelo Cascata, onde as fases de Especificação, Projeto, Implementação e Validação são realizadas de forma sequencial e uma etapa só é iniciada após a conclusão da anterior, no Modelo Incremental essas atividades são intercaladas e repetidas em cada nova versão. O progresso acontece através de sucessivos refinamentos e iterações, com rápido feedback entre todas as atividades.

Esse modelo permite entregar uma versão funcional do software antes da conclusão do produto final, possibilitando que os usuários comecem a utilizá-lo e fornecer feedback. Esse feedback é valioso para ajustar e melhorar o software nas atualizações seguintes, promovendo uma evolução gradual do sistema. No entanto, o Modelo Incremental requer um planejamento cuidadoso e uma gestão eficaz para garantir que o produto final seja consistente e atenda às expectativas, pois o desenvolvimento por etapas pode introduzir complexidade adicional.
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
