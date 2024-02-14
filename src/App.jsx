import React, { useState, useEffect } from 'react';
import Detail from './components/Detail';
import './App.css'; 

const RecipeFinder = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className='recipe-finder-container'>
      <h1>Recipe Finder</h1>
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        <div>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for a meal by name..."
            className='search-input'
          />
          <div>
            {recipes.length > 0 ? (
              <ul className='recipe-list'>
                {recipes.map((recipe) => (
                  <li key={recipe.idMeal} className='recipe-item'>
                    <h2 className='recipe-name'>{recipe.strMeal}</h2>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className='recipe-image' />
                    <button onClick={() => handleViewDetail(recipe)}>View</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recipes found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
