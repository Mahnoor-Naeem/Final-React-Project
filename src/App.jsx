import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route, Redirect} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Component/Home/Home';
import Service from './Service';
import Navbar from './Navbar';
import HeaderSec from './Component/HeaderSec/HeaderSec'; 
import MealRecipe from './Component/MealRecipe/MealRecipe';
import MealPlanner from './Component/MealPlanner/MealPlanner';
import Login from './Component/Login/Login';
const App=()=>{
    return(
        <>
        <HeaderSec/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/mealrecipe' component={MealRecipe}/>
        <Route exact path='/mealplanner' component={MealPlanner}/>
        <Route exact path='/login' component={Login}/>
        <Redirect to='/' />
        </Switch>
        </>
    )
}

export default App;