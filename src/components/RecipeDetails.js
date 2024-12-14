import Header from "./Header";
import useFetch from "./useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const { data, loading, error, fetchData } = useFetch(
    `https://recipe-organiser-backend-jagdish-pradhans-projects.vercel.app/recipes/${recipeId}`
  );

  useEffect(() => {
    fetchData();
  }, [recipeId]);

  return (
    <>
      <Header />
      <main className="container py-4">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while fetching recipe.</p>}
        {data && (
          <>
            <h2>{data.name}</h2>
            <div className="card">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={data.posterUrl}
                    alt={data.name}
                    className="rounded-start img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="py-2">Cuisine: {data.cuisine}</h3>
                    <h3 className="py-2">Ingredients: </h3>
                    <p>{data.ingredients}</p>
                    <div className="py-2">
                      <h3>Instructions: </h3>
                      <ol>
                        {data.instructions.map((instruction, index) => (
                          <li key={index}> {instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default RecipeDetails;
