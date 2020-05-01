import React, { useState,useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';

const App=()=>{

  
  const appId="03d18a20";
  const appKey="cfbf15a92435217d5399c331f7b798b5";
  
 // const [counter,setCounter]=useState(0)
 const [recipes,setRecipes]=useState([]);
 const [search,setSearch]=useState("");
 const [query,setQuery]=useState("chicken");

 useEffect(() =>{
   getRecipes();
 }, [query]);

 const getRecipes=async() => {
   const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
   const data=await response.json();
    setRecipes(data.hits);
   // console.log(data.hits);
 }
 const updateSearch=e=>{
   setSearch(e.target.value);
 }
 const getSearch=e=>{
   e.preventDefault();
  setQuery(search);
  setSearch("");
  
}
 
  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input value={search} onChange={updateSearch} className="search-bar" type="text"/>
        <button className="search-button" type="submit">search
        </button>
        
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  )
}
       
        
  
 

export default App;
