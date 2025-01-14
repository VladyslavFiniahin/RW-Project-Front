import { React, useState, useEffect } from "react";
import styles from "./ItalianCategory.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const cuisines = [
  "Breakfast",
  "Main Courses",
  "Snacks",
  "Desserts",
  "Salads",
  "Vegan Dishes",
  "Drinks",
];

const ItalianCategory = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://94.231.178.180:3001/api/recipes/getall');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data);
        console.log("fetched recipes:\n\n", data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Filter recipes based on selected category (cuisine_id)
  const filteredRecipes = chosenCategory
    ? recipes.filter(recipe => recipe.cuisine_id === chosenCategory)
    : recipes;

  const handleCategoryClick = (categoryId) => {
    // Set the chosen category based on the cuisine_id
    setChosenCategory(categoryId);
  };

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.ItalianCategory}>
        <div>
          <div className={styles.categorytitle}>ITALIAN CUISINE</div>
          <nav>
            {cuisines.map((cuisine, index) => (
              <span
                key={index}
                className={chosenCategory === index + 1 ? styles.selectedCategory : ""}
                onClick={() => handleCategoryClick(index + 1)} // Set category_id based on cuisine order (1-based index)
              >
                {cuisine}
              </span>
            ))}
          </nav>
        </div>

        <main>
          <div className={styles.track}>
            {filteredRecipes.map((recipe) => (
              <div className={styles.item} key={recipe.recipe_id}>
                <img src={recipe.image_url} alt={recipe.title} />
                <p>{recipe.title}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ItalianCategory;