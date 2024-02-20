import React from "react";
import { Routes, Route } from 'react-router-dom'; 
import axios from 'axios';

import Header from "./Header";
import Dishes from "./Dishes"
import Categories from "./Categories";
import Category from "./Category";
import ErrorPage from "./Error-page";
import Recipe from "./Recipe";


function App () {
    const [response, setResponse] = React.useState([]);
    let [requested, dishReq] = React.useState(false);
    

    const LINK = `http://127.0.0.1:8000/dishes/`;

    var dishes = [];
    

    function ReqDishes(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
        });
    };


    for(let i = 0; i < response.length; i+=1) {
        dishes.push(response[i]);
    };
    

    if(requested === false){
        ReqDishes();
        dishReq(true);
    };


    if(requested === true){
        console.log(dishes);
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index path="/" element={<Dishes dishes={dishes}/>}/>
                    <Route path="categories" element={<Categories />}/>
                    <Route path="categories/:category" element={<Category dishes={dishes}/>}/>
                    <Route path="recipe/:id" element={<Recipe dishes={dishes}/>}/>
                    <Route path="*" element={<ErrorPage />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;