import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() === "") return;
    setSearchHistory((prev) => [searchQuery, ...prev.slice(0, 4)]);
    console.log("Search query:", searchQuery);
    setSearchQuery("");
  };

  return (
    <div className={styles.header}>
      <div className={styles.group1}>
        <div className={styles.g1_item1}>
          <Link className={styles.link} to="/">Home</Link>
        </div>
        <div className={styles.g1_item2}>
          <Link className={styles.link} to="/categories">Categories</Link>
        </div>
      </div>

      <img src="/header/header.svg" alt="logo" className={styles.center_img} />

      <div className={styles.group2}>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/map">Map</Link>
        </div>
        <div className={styles.g2_item1}>
          <Link className={styles.link} to="/about">About Us</Link>
        </div>
      </div>

      <div className={styles.right}>
        <button onClick={toggleSearch} className={styles.search_button}>
          <img src="/header/search.svg" alt="search" className={styles.search_img} />
        </button>
        <Link className={styles.link} to="/profile">
          <img src="/header/profile.svg" alt="profile" className={styles.profile_img} />
        </Link>
      </div>

      {isSearchOpen && (
        <div className={styles.search_window}>
          <div className={styles.search_bar}>
            <button onClick={handleSearchSubmit} className={styles.submit_button}>
              <img
                src="/header/search.svg"
                alt="Submit search"
                className={styles.icon_img}
              />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="more than 1000 recipes"
              className={styles.search_input}
            />
            <button onClick={toggleSearch} className={styles.close_button}>
              ✖
            </button>
          </div>

          {searchHistory.length > 0 && (
            <div className={styles.history_section}>
              <h4>Search History</h4>
              <ul className={styles.history_list}>
                {searchHistory.map((item, index) => (
                  <li key={index} className={styles.history_item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
