import React from "react";
import "./App.css";
import RecipeList from "./RecipeList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe Book</h1>
      </header>
      <main>
        <RecipeList />
      </main>
    </div>
  );
};

export default App;
