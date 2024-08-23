import React from 'react';
import '../styles/ModelPage.css';



function ModelCard({ title, description, imageUrl }) {
  return (
    <div className="model-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ModelCard;
