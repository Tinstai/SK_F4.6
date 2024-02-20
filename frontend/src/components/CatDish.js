import React from "react";
import "../styles/CatDish.css"
import { Link } from "react-router-dom";


function CatDish(props) {
    const LINK2 = `http://localhost:8080/recipe/${props.cat_dish.id}`;

    return(
        <>
            <tr key={props.cat_dish.id}>
                <td>{props.cat_dish.name}</td>
                <td>
                    <img src={props.cat_dish.photo} className="photo_of_dish"/>    
                </td>
                <td>{props.cat_dish.category}</td>
                <td><Link to={LINK2}>Рецепт {props.cat_dish.id} </Link></td>
            </tr>
        </>
    );
}

export default CatDish;