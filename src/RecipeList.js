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
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://images.pexels.com/photos/105588/pexels-photo-105588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
