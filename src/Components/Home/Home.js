import React, { useEffect, useState } from "react";
import MealOfDay from "../MealOfTheDay/MealOfDay";
import Banner from "./Banner/Banner";
import Category from "./Categories/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [singleCategory, setSingleCategory] = useState({});

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories.length > 10) {
          const newData = data.categories.slice(0, 5);
          setCategories(newData);
          setSingleCategory(newData[0]);
        } else {
          setCategories(data.categories);
          setSingleCategory(data.categories[0]);
        }
        // console.log(categories);
      });
  }, []);

  const handleCategory = (category) => {
    setSingleCategory(category);
  };
  // console.log(singleCategory);

  return (
    <section>
      <Banner></Banner>
      <div className="mt-10">
        <div className="flex  justify-center">
          <div className="">
            <h1 className="text-2xl text-center w-48 p-1 rounded-md text-white bg-green-600 font-semibold">
              Top category
            </h1>
            <div className="border px-7 py-3 rounded">
              {categories.map((category) => (
                <button
                  onClick={() => handleCategory(category)}
                  className="rounded-full bg-slate-500 text-white p-3 ml-2 text-lg"
                  key={category.idCategory}
                  type="button"
                >
                  <img
                    className="w-20 m-auto"
                    src={category.strCategoryThumb}
                    alt=""
                  />
                  {category.strCategory}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-40">
          {<Category category={singleCategory}></Category>}
        </div>
        <div>
          <MealOfDay></MealOfDay>
        </div>
      </div>
    </section>
  );
};
export default Home;
