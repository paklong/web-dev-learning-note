import { Fragment } from 'react';
import { recipes } from './data/data';

function RecipeList({ recipes }) {
  return (
    recipes.map(recipe =>
      <Fragment key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient =>
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
      </Fragment>
    )

  );
}

export default function App() {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeList
        recipes={recipes}
      />
    </div>
  );
}
