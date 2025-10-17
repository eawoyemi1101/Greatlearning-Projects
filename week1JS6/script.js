document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');
    let editIndex = -1;
    let recipes = [];  // This Keeps track of the index of the recipe being edited

    // Clear Input Fields
    const clearInputFields = () => {
        recipeForm.title.value = '';
        recipeForm.ingredients.value = '';
        recipeForm.instructions.value = '';
    };

    // Add a New Recipe
    const addRecipe = (event) => {
        event.preventDefault();
        const title = recipeForm.title.value;
        const ingredients = recipeForm.ingredients.value;
        const instructions = recipeForm.instructions.value;

        const newRecipe = { title, ingredients, instructions };

        if (editIndex === -1) {
            // Add new recipe
            recipes.push(newRecipe);
        } else {
            // Update existing recipe
            recipes[editIndex] = newRecipe;
            editIndex = -1;  // Reset the edit index after updating
        }

        clearInputFields();
        displayRecipes();
    };

    // Display Recipes
    const displayRecipes = () => {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeEl = document.createElement('div');
            recipeEl.classList.add('recipe');
            recipeEl.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <button onclick="editRecipe(${index})">Edit</button>
                <button onclick="deleteRecipe(${index})">Delete</button>
            `;
            recipeList.appendChild(recipeEl);
        });
    };

    // Edit Recipe
    window.editRecipe = (index) => {
        const recipe = recipes[index];
        recipeForm.title.value = recipe.title;
        recipeForm.ingredients.value = recipe.ingredients;
        recipeForm.instructions.value = recipe.instructions;

        editIndex = index;  // Set the index of the recipe being edited
    };

    // Delete Recipe
    window.deleteRecipe = (index) => {
        recipes.splice(index, 1);
        displayRecipes();
    };

    recipeForm.addEventListener('submit', addRecipe);
});
