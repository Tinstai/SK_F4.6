import React from "react";
import '../styles/Header.css'
import { Link, Outlet } from "react-router-dom";


function Header() {
    return (
        <>
            <header className="head"> 
                <Link className="btn-primary" to="http://localhost:8080/">Главная</Link>
                <Link className="btn-primary" to="http://localhost:8080/categories">Категории</Link>
            </header>
            <Outlet />
        </>
    );
}

export default Header;