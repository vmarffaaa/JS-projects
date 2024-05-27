// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then((data) => {
        let recipes = data.recipes;
        let recipesContainer = document.getElementById('recipesContainer');


        recipes.forEach(recipe => {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            let title = document.createElement('h2');
            title.innerText = recipe.name;
            recipeDiv.appendChild(title);

            let image = document.createElement('img');
            image.src = recipe.image;
            recipeDiv.appendChild(image);

            let rating = document.createElement('p');
            rating.innerText = `Рейтинг: ${recipe.rating} (${recipe.reviewCount} відгуків)`;
            recipeDiv.appendChild(rating);

            let prepTime = document.createElement('p');
            prepTime.innerText = `Час підготовки: ${recipe.prepTimeMinutes} хв`;
            recipeDiv.appendChild(prepTime);

            let cookTime = document.createElement('p');
            cookTime.innerText = `Час приготування: ${recipe.cookTimeMinutes} хв`;
            recipeDiv.appendChild(cookTime);

            let servings = document.createElement('p');
            servings.innerText = `Кількість порцій: ${recipe.servings}`;
            recipeDiv.appendChild(servings);

            let difficulty = document.createElement('p');
            difficulty.innerText = `Складність: ${recipe.difficulty}`;
            recipeDiv.appendChild(difficulty);

            let cuisine = document.createElement('p');
            cuisine.innerText = `Кухня: ${recipe.cuisine}`;
            recipeDiv.appendChild(cuisine);

            let calories = document.createElement('p');
            calories.innerText = `Калорії на порцію: ${recipe.caloriesPerServing}`;
            recipeDiv.appendChild(calories);

            let ingredientsTitle = document.createElement('h3');
            ingredientsTitle.innerText = 'Інгредієнти:';
            recipeDiv.appendChild(ingredientsTitle);

            let ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                let listItem = document.createElement('li');
                listItem.innerText = ingredient;
                ingredientsList.appendChild(listItem);
            });
            recipeDiv.appendChild(ingredientsList);

            let instructionsTitle = document.createElement('h3');
            instructionsTitle.innerText = 'Інструкція:';
            recipeDiv.appendChild(instructionsTitle);

            let instructionsList = document.createElement('ul');
            recipe.instructions.forEach(instruction => {
                let listItem = document.createElement('li');
                listItem.innerText = instruction;
                instructionsList.appendChild(listItem);
            });
            recipeDiv.appendChild(instructionsList);

            let separation = document.createElement('p')
            separation.innerText = '===================================================================='
            recipeDiv.appendChild(separation);

            recipesContainer.appendChild(recipeDiv);
        });

    });
