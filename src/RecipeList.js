import React from "react";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "parmesan cheese",
      "black pepper",
    ],
    instructions:
      "Cook spaghetti. Mix eggs, cheese, and pepper. Fry pancetta. Combine all ingredients.",
    image: "https://via.placeholder.com/150?text=Carbonara",
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    ingredients: [
      "chicken breast",
      "mixed vegetables",
      "soy sauce",
      "ginger",
      "garlic",
    ],
    instructions:
      "Cut chicken into cubes. Stir fry vegetables. Add chicken and sauce. Cook until done.",
    image: "https://via.placeholder.com/150?text=Stir+Fry",
  },
];

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
