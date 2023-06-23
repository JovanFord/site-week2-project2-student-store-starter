import React, { useState } from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";

export default function Home({ products }, {handleAddItem}) {

  // Searching
  const [search, setSearch] = useState(" "); // State variable to hold the search query
  const [filteredData, setFilteredData] = useState(""); // State variable to hold the filtered data based on search

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value); // Update the search query

    setFilteredData(
      products.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase()) // Filter the products based on the search query
      )
    );
  };
  console.log("------", filteredData);

  // Category select
  const [selectedCategory, setSelectedCategory] = useState('all'); // State variable to hold the selected category

  const filteredItems = products?.filter(
    (item) => item.category === selectedCategory || selectedCategory === 'all' // Filter the products based on the selected category
  );

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Hero />
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <br></br>
        <br></br>
      </div>

      {/* Category buttons */}
      <button className="category-button" onClick={() => handleCategorySelect('all')}>
        All Categories
      </button>
      <button className="category-button" onClick={() => handleCategorySelect("clothing")}>
        Clothing
      </button>
      <button className="category-button" onClick={() => handleCategorySelect("food")}>
        Food
      </button>
      <button className="category-button" onClick={() => handleCategorySelect("accessories")}>
        Accessories
      </button>
      <button className="category-button" onClick={() => handleCategorySelect("tech")}>
        Tech
      </button>

      {/* ProductGrid component */}
      <br></br>

      {filteredData ? (
        <><ProductGrid products={filteredData} handleAddItem={handleAddItem}/></>
      ) : (
        <><ProductGrid products={filteredItems} handleAddItem={handleAddItem}/></>
      )}

      {/* About section */}
      <div className="about-section">
        <h1 className="about">About</h1>
        <p> The codepath student store offers great products at great prices from a great team and for a great cause.
          We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
          All proceeds go towards bringing high-quality CS education to college students around the country.</p>
      </div>

      {/* Contact section */}
      <div className="contact-section">
        <h1 className="contact">Contact Us</h1>
        <p> Email:
            code@path.org
            Phone:
            1-800-CODEPATH
            Address:
            123 Fake Street, San Francisco, CA</p>
      </div>
    </div>
  );
};
