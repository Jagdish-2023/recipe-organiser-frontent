import Header from "./Header";
import { useState } from "react";

const AddRecipeForm = () => {
  const [recipeName, setRecipeName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const postFormData = async () => {
    const formData = {
      name: recipeName,
      cuisine: cuisine,
      ingredients: ingredients,
      instructions: instructions
        .split(". ")
        .map((text) => (text.includes(".") ? text : `${text}.`)),
      posterUrl: imageUrl,
    };

    try {
      const response = await fetch(
        "https://recipe-organiser-backend-jagdish-pradhans-projects.vercel.app/recipes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response) {
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log("Error occured while adding Recipe", error);
    }
  };

  const recipeFormHandler = (e) => {
    e.preventDefault();

    postFormData();

    setRecipeName("");
    setCuisine("");
    setImageUrl("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <h2>Add Recipe</h2>
          <form onSubmit={recipeFormHandler}>
            <div>
              <label htmlFor="recipeName">Name: </label>
              <br />
              <input
                type="text"
                id="recipeName"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="cuisineType">Cuisine Type:</label>
              <br />
              <input
                type="text"
                id="cuisineType"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="imageUrl">Image Link:</label>
              <br />
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label htmlFor="ingredients">Ingredients:</label>
              <br />
              <textarea
                id="ingredients"
                rows={2}
                cols={22}
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <div>
              <label htmlFor="instructions">Instructions:</label>
              <br />
              <textarea
                id="instructions"
                rows={2}
                cols={22}
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          {successMessage && (
            <p className="text-success mt-1">Recipe added successfully.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default AddRecipeForm;
