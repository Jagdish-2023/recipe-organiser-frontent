import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand" to="/">
            Recipe Organiser
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                Recipes
              </NavLink>
              <NavLink className="nav-link" to="/add-recipe">
                Add Recipe
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
