import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Header />
      <main className="container mt-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Search by recipe name..."
            className="form-control
        "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <section className="py-3">
          <h1>All Recipes:</h1>
          <Recipes searchQuery={searchQuery} />
        </section>
      </main>
    </>
  );
}

export default App;
