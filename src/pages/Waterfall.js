import React from 'react';
import '../styles/ModelPage.css';
import cascataImage from '../img/cascata.jpeg';

function Waterfall() {
  return (
    <div className="model-page">
      <h1 className="title">Modelo Cascata</h1>
      <p className="description">
      O Método Cascata (ou Waterfall), também conhecido como método tradicional, é um modelo de gerenciamento de projetos caracterizado por suas fases sequenciais e planejamento extensivo. Utilizado desde a Segunda Guerra Mundial, esse método é frequentemente associado a projetos com custos, escopo e cronograma fixos. O modelo segue uma progressão linear e sequencial, onde cada fase deve ser concluída antes de iniciar a próxima. As quatro fases principais são planejamento, execução, validação e entrega.

Esse método é denominado preditivo porque permite estimar e prever o tempo e orçamento totais do projeto com base no planejamento inicial. A fase de planejamento é crucial, pois todos os requisitos são analisados minuciosamente antes do desenvolvimento começar. O projeto é executado com base em um acordo total entre desenvolvedores e clientes sobre o que será entregue ao longo do ciclo de vida do projeto.

No entanto, o formato rígido do Método Cascata pode não ser ideal para projetos longos e complexos. Como o modelo não permite revisitar etapas anteriores uma vez concluídas, mudanças nos requisitos ou ajustes podem ser difíceis e custosos. Isso pode resultar em um produto final que não atenda exatamente às necessidades do cliente, apesar de o modelo oferecer um caminho claro e bem estruturado com uma sequência rígida de tarefas.
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
