import React, { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { categories } from "../api/api";

const CategoryContext = createContext();

export const Categories = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [data, setData] = useState({});

  const handleButtonClick = (category) => {
    setActiveButton(category.id);
    setData(category);
  };

  return (
    <>
      <div>
        <h1>Session Categories</h1>
        <section className="FlexContainer">
          {categories.map((category) => (
            <Link
              key={category.id}
              className={category.id === activeButton ? "link active-button" : "link"}
              onClick={() => handleButtonClick(category)}
              to={{ pathname: `/categories/${category.id}` }}
            >
              {category.name}
            </Link>
          ))}
        </section>

        <CategoryContext.Provider value={data}>
          <Outlet />
        </CategoryContext.Provider>
      </div>
    </>
  );
};
