import useFetch from "./useFetch";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Recipes = ({ searchQuery }) => {
  const navigate = useNavigate();
  const { data, loading, error, fetchData } = useFetch(
    "https://recipe-organiser-backend-jagdish-pradhans-projects.vercel.app/recipes"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRecipes = data
    ? data.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCardClick = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `https://recipe-organiser-backend-jagdish-pradhans-projects.vercel.app/recipes/${recipeId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.log("Failed to delete", error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error occured while fetching Recipes.</p>}
      {data && (
        <div className="row">
          {filteredRecipes.map((recipe) => (
            <div className="col-md-3 mb-4" key={recipe._id}>
              <div
                className="card"
                onClick={() => handleCardClick(recipe._id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={recipe.posterUrl}
                  alt={recipe.name}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    <strong>Cuisine Type: </strong>
                    {recipe.cuisine}
                  </p>
                  <p className="card-text">
                    <strong>Ingredients: </strong>
                    <Link
                      to={`/recipes/${recipe._id}`}
                      onClick={(e) => e.stopPropagation()}
                    >{`See Recipe >`}</Link>
                  </p>
                  <p className="card-text">
                    <strong>Instructions: </strong>
                    <Link
                      to={`/recipes/${recipe._id}`}
                      onClick={(e) => e.stopPropagation()}
                    >{`See Recipe >`}</Link>
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteRecipe(recipe._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
