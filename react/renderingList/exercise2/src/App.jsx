import { Fragment } from 'react';
import { recipes } from './data/data';

function IngredientList({ ingredients }) {
  return (
    ingredients.map(ingredient => {
      return <li key={ingredient}>{ingredient}</li>
    }
    )
  );
}

function RecipeList({ recipes }) {
  return (
    recipes.map(recipe =>
      <Fragment key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          <IngredientList ingredients={recipe.ingredients} />
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
