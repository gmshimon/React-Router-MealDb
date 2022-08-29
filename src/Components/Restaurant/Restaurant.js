import React, { useEffect, useRef, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals,setMeals] = useState([]);
    const [searchText,setText] = useState('');
    const text = useRef('');

    const handleClick = () => {
        const search_text = text.current.value;
        setText(search_text);
        text.current.value = '';
        
    }

    const handleBreakfast = () => {
        setText('breakfast');
    }
    
    const handleLunch = () => {
        setText('lunch');
    }

    const handleDinner = () => {
        setText('dinner');
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => {
            let newMeals;
            if(data.meals!=null) {
                if(data.meals.length > 10){
                    newMeals = data.meals.slice(0,8);
                    setMeals(newMeals);
                }
                else{
                    setMeals(data.meals);
                }
            }
            else
            setMeals(data.meals);
        })
    },[searchText])
    // 
    return (
        <div style={meals==null?{height:'60.2rem'}:{height:'100%'}} className="relative pb-12 bg-slate-200">
            <div className="text-center">
                <h1 className="pb-6 text-5xl">Ajke onk khawa dawa hobe</h1>
                <input ref={text} className=" mt-8 w-1/5 px-3 h-10  bg-white border border-slate-300 rounded-xl text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="search food"/>
                <button onClick={handleClick} className="bg-green-400 py-2 px-5 ml-2 rounded-xl border-0 text-md font-semibold hover:bg-green-600">Search</button>
            </div>
            <div className="text-center mt-10">
                <button onClick={handleBreakfast} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl">Breakfast</button>
                <button onClick={handleLunch} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl">Lunch</button>
                <button onClick={handleDinner} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl font-normal ">Dinner</button>
            </div>
           <section className="w-full flex justify-center mt-20">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-24 gap-y-16">
                    {
                        meals==null?<p className="text-3xl font-medium text-red-500">Zero Result found</p>:meals.map(meal=><Meal
                            key={meal.idMeal}
                            meal={meal}
                        ></Meal>)
                    }
                </div>
           </section>
        </div>
    );
};

export default Restaurant;