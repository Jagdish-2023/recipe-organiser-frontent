import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeDetails />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipeForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
