document.getElementById('searchButton').addEventListener('click', function() {
    let ingredient = document.getElementById('ingredient').value;
    fetchRecipes(ingredient);
  });
  
  function fetchRecipes(ingredient) {
    const apiKey = '2176476bd0d54fb69fd7be25e0b8be3c';
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayRecipes(data.results))
      .catch(error => console.error('Error:', error));
  }
  
  function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
  
    recipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
      recipeElement.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" width="200">
        <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
      `;
      recipesContainer.appendChild(recipeElement);
    });
  }
  