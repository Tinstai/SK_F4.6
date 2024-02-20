import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import CatDish from "./CatDish";


function Category(){
    const {category} = useParams();
    const [response, setResponse] = React.useState([]);
    let [requested, catReq] = React.useState(false);
    
    const LINK = `http://127.0.0.1:8000/dishes/?category=${category}`;   
    
    var categories = [];


    function ReqCategies(){
        if (requested === false){
            axios.get(LINK).then(res => {
                setResponse(res.data.results);
                catReq(true);
            });
        }
    };


    for(let i = 0; i < response.length; i+=1) {
        categories.push(response[i]);
    };


    if(requested === false){
        ReqCategies();
        console.log(categories);
        console.log(useParams());
    };

   
    return(
        <>
            <h2>Категория: { category }</h2>
            <Table variant='' striped bordered hover className='dishes'>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Фото</th>
                        <th>Категория</th>
                        <th>Рецепт</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat_dish, index) => <CatDish key={cat_dish.id} cat_dish={cat_dish} index={index}/>)}
                </tbody>
            </Table>
        </> 
    );
}

export default Category;