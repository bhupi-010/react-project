import React from 'react';

const Detail = ({ recipe, onBack }) => {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = recipe;

  return (
    <div className="detail-page">
      <div className="detail-header">
        <h2>{strMeal}</h2>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="detail-info">
        <p><strong>Category:</strong> {strCategory}</p>
        <p><strong>Area:</strong> {strArea}</p>
        <h3>Ingredients:</h3>
        <ul>
          <li>{strIngredient1}</li>
          <li>{strIngredient2}</li>
          <li>{strIngredient3}</li>
          <li>{strIngredient4}</li>
          <li>{strIngredient5}</li>
        </ul>
        <h3>Instructions:</h3>
        <p>{strInstructions}</p>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default Detail;
