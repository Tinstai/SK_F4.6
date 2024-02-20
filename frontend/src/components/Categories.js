import React from "react";
import { Link } from "react-router-dom";

import "../styles/Categories.css"


function Categories(){
    return(
        <>
            <h2>Категории</h2>
            <div className="categories">
                <Link className="btn-primary" to="http://localhost:8080/categories/Супы">Супы</Link>
                <Link className="btn-primary" to="http://localhost:8080/categories/Гарниры">Гарниры</Link>
                <Link className="btn-primary" to="http://localhost:8080/categories/Главное блюдо">Главное блюдо</Link>
                <Link className="btn-primary" to="http://localhost:8080/categories/Салаты">Салаты</Link>
            </div>
            
        </>
    );
}

export default Categories;