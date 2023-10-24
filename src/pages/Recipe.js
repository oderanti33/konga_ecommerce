import React from 'react'
import '../styles/Recipe.css'
import { useState } from 'react';
import Axios from 'axios';

function Recipe() {

    const [query, setQuery] = useState('');
    const [selectOption, setSelectOption] = useState('vegetarian');
    const [recipes, setRecipes] = useState([]);

    const YOUR_APP_ID = 'f5942e5d';
    let YOUR_APP_KEY = '107693cb882b519994b48b4bc646fa90';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${selectOption}`




    const getRecipefunc = async () => {
        var result = await Axios.get(url);
        setRecipes(result.data.value)
        console.log(result.data.hits);
    }

    function handleChange(e) {
        const inputValue = e.target.value;
        setQuery(inputValue);
        e.preventDefault()
    }

    function getRecipeApi(e) {
        getRecipefunc();
        e.preventDefault();
    }

    function selectOptionFunc(e) {
        setSelectOption(e.target.value);
    }

    // {
    //     getRecipe.map(function (e) {
    //         return (
    //             <h1>[e][recipe].[label]</h1>
    //         )
    //     })
    // }



    return (
        <div className='recipe'>
            <h1>
                <u>Food Recipe Page</u>
            </h1>
            <form className='recipe__searchForm'>
                <input value={query} onChange={handleChange} type='search' placeholder='kindly type in your recipe' className='recipe__input' />
                <select onClick={selectOptionFunc} className='recipe__healthLabels'>
                    <option value='vegetarian'>vegetarian</option>
                    <option value='low-sugar'>low-sugar</option>
                    <option value='dairy-free'>dairy free</option>
                    <option value='immuno-supportive'>immune supportive</option>
                    <option value='kidney-friendly' >kidney friendly</option>
                </select>
                <button onClick={getRecipeApi} type='submit' className='recipe__submit'>SEARCH</button>
            </form>
            <div>
                {recipes.map(recipeY => {
                    return <h1>{recipeY['recipe']['label']}</h1>;
                })}
            </div>
        </div>
    )
}

export default Recipe;