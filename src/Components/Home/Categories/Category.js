import React from "react";

const Category = (props) => {
  // console.log(props.category);
  return (
    <div
      className="w-2/5 flex
        items-center justify-between bg-slate-400 p-4"
      style={{ height: "600px" }}
    >
      <img src={props.category?.strCategoryThumb} alt="" />
      <div className="border-x-4 ">
        <p className="mx-3 text-4xl font-bold italic">{props.category?.strCategory}</p>
        <p className="mx-3 text-2xl border-y-4 mb-9">
          {props.category?.strCategoryDescription}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Category;
