import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Meal = (props) => {
    const {strArea,strCategory,strMeal,strMealThumb,strTags,strSource,strYoutube} = props.meal;
    console.log(props.meal)
    return (
        <div style={{width:"300px"}}  className="border-2 border-slate-300 rounded-xl pt-2 px-2 bg-slate-300 shadow-xl shadow-cyan-500/50 text-center">
            <div>
                <img className=" rounded-xl" src={strMealThumb} width="300px" alt="" />
            </div>
            <div className="mt-2">
                <h1 className="text-3xl text-center italic">{strMeal}</h1>
                <p className="text-center text-md font-semibold text-slate-600">{strTags}</p>
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                    <p className="ml-3 text-xl">{strArea}</p>
                </div>
                <div>
                    <p className="ml-3 text-xl">Category:<span className="font-medium"> {strCategory}</span></p>
                </div>
            </div>
            <div className="text-center mt-5 mb-2">
                <button type="button" className="bg-slate-500 hover:bg-slate-600 px-4 py-2 text-white border-2 rounded-xl">
                    <a target="_blank" href={strYoutube}>Tutorial</a>
                </button>
            </div>
        </div>
    );
};

export default Meal;