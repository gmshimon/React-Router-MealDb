import React, { useEffect, useState } from 'react';

const MealOfDay = () => {
    const [food,setFood] = useState({});

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(data=>setFood(data.meals[0]))
    },[])
    console.log(food)
    const {strArea,strCategory,strMeal,strTags,strYoutube,strMealThumb} = food;
    return (
        <section className="w-full flex my-20">
            <div className="w-1/2">
                <img style={{width:'100%', height:'750px'}} src={strMealThumb} alt="" />
            </div>
            <section className="w-1/2"  style={{backgroundColor:'rgb(247,245,242)', height:'750px'} }>
                <div className="w-full flex items-center justify-center pt-24" >
                    <div className="grid grid-cols-2 gap-64"  >
                        <div className="text-center">
                            <p className="text-4xl italic border-b-2 border-gray-900 pb-3">Name</p>
                            <p className="text-3xl font-mono">{strMeal}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl italic border-b-2 border-gray-900 pb-3">Origin</p>
                            <p className="text-3xl font-mono">{strArea}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl italic border-b-2 border-gray-900 pb-3">Tags</p>
                            <p className="text-3xl font-mono">{strTags?strTags:<span className="text-red-600">No Tag</span>}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl italic border-b-2 border-gray-900 pb-3">Category</p>
                            <p className="text-3xl font-mono">{strCategory}</p>
                        </div>
                    </div>
                </div>
                <div  className="w-1/5 m-auto">
                    <button type="button" className="bg-slate-500 hover:bg-slate-600 p-4 text-white border-2 rounded-full">
                        <a target="_blank" href={strYoutube}>Tutorial</a>
                    </button>
                </div>
            </section>
        </section>
    );
};

export default MealOfDay;