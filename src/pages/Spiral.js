import React from 'react';
import '../styles/ModelPage.css';


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
    </div>
  );
}

export default Spiral;
