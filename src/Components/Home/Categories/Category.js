import React from 'react';

const Category = (props) => {
    console.log(props.category)
    return (
        <div className="w-2/5 flex
        items-center justify-between bg-slate-400 p-4" style={{height:'600px'}}>
            <img src={props.category?.strCategoryThumb} alt="" />
            <p className="ml-3 text-2xl border-x-4 px-2">{props.category?.strCategoryDescription}</p>
        </div>
    );
};

export default Category;