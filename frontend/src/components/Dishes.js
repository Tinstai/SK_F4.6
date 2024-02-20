import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Dish from './Dish';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Dishes.css"


function Dishes(props) {
    return (
        <>
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
                    {props.dishes.map((dish, index) => <Dish key={dish.id} dish={dish} index={index}/>)}
                </tbody>
            </Table>
        </> 
    );
}

export default Dishes;