import React from "react";
import "../styles/Dish.css"
import { Link } from "react-router-dom";


function Dish(props) {
    const LINK1 = `http://localhost:8080/recipe/${props.dish.id}`;

    return(
        <>
            <tr key={props.dish.id}>
                <td>{props.dish.name}</td>
                <td>
                    <img src={props.dish.photo} className="photo_of_dish"/>    
                </td>
                <td>{props.dish.category}</td>
                <td><Link to={LINK1}>Рецепт {props.dish.id}</Link></td>
            </tr>
        </>
    );
}

export default Dish;