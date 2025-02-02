import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";

const localRecipes = [
  { id: 1, name: "Granola with fruits", image: "/images/image1.png" },
  { id: 2, name: "Pasta with green", image: "/images/image2.png" },
  { id: 3, name: "Pancakes", image: "/images/image3.png" },
  { id: 4, name: "Bread and leaf", image: "/images/image4.png" },
];

const SearchBar = ({ isSearchOpen, toggleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentRecipes, setRecentRecipes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

    if (event.target.value.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredRecipes = localRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setSearchResults(filteredRecipes);
  };

   const handleRecipeClick = (recipe) => {
    setRecentRecipes((prev) => {
      const updated = [recipe, ...prev.filter((r) => r.id !== recipe.id)];
      return updated.slice(0, 4); 
    });
    toggleSearch(); 
  };

  return (
    isSearchOpen && (
      <div className={styles.search_window}>
        <div className={styles.search_bar}>
          <img src="/header/search.svg" alt="Search" className={styles.icon_img} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className={styles.search_input}
          />
          <button onClick={toggleSearch} className={styles.close_button}>✖</button>
        </div>

        {searchResults.length > 0 ? (
          <div className={styles.results_section}>
            <div className={styles.results_text}>Results</div>
            <div className={styles.results_list}>
              {searchResults.map((recipe) => (
                <Link
                  to={`/recipe/${recipe.id}`}
                  key={recipe.id}
                  className={styles.result_card}
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <img src={recipe.image} alt={recipe.name} className={styles.recipe_image} />
                  <p className={styles.recipe_name}>{recipe.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          recentRecipes.length > 0 && (
            <div className={styles.results_section}>
              <div className={styles.results_text}>Recent Recipes</div>
              <div className={styles.results_list}>
                {recentRecipes.map((recipe) => (
                  <Link
                    to={`/recipe/${recipe.id}`}
                    key={recipe.id}
                    className={styles.result_card}
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <img src={recipe.image} alt={recipe.name} className={styles.recipe_image} />
                    <p className={styles.recipe_name}>{recipe.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    )
  );
};

export default SearchBar;
