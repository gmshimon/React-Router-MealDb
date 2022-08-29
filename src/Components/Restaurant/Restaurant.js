import React, { useEffect, useRef, useState } from 'react';

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
        .then(data => setMeals(data.meals))
    },[searchText])

    console.log(meals)

    return (
        <div className="">
            <div className="text-center">
                <h1 className="mt-6 text-4xl">Ajke onk khawa dawa hobe</h1>
                <input ref={text} className=" mt-8 w-1/5 px-3 h-10  bg-white border border-slate-300 rounded-xl text-xl shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="search food"/>
                <button onClick={handleClick} className="bg-green-400 py-2 px-5 ml-2 rounded-xl border-0 text-md font-semibold hover:bg-green-600">Search</button>
            </div>
            <div className="text-center mt-10">
                <button onClick={handleBreakfast} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl">Breakfast</button>
                <button onClick={handleLunch} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl">Lunch</button>
                <button onClick={handleDinner} className="border-solid border-2 border-red-600 py-2 rounded-md ml-12 w-44 hover:bg-red-400 hover:border-0 text-xl font-normal ">Dinner</button>
            </div>
        </div>
    );
};

export default Restaurant;