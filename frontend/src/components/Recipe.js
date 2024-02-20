import React from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Step from "./Step";


function Recipe() {
    const [response, setResponse] = React.useState([]);
    let [requested, resipeReq] = React.useState(false);
    const {id} = useParams();

    const LINK = `http://127.0.0.1:8000/steps/?dish=${id}`;

    var steps = [];
    

    function ReqRecipe(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
            resipeReq(true);
            console.log(steps);
        });
    };


    for(let i = 0; i < response.length; i+=1) {
        steps.push(response[i]);
    };
    
    if (requested === false){
        ReqRecipe();
    };


    return(
        <>
            <h2>Рецепт </h2>
            <Table variant='' striped bordered hover className='dishes'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Фото</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {steps.map((step, index) => <Step key={step.id} step={step} index={index}/>)}
                </tbody>
            </Table>
        </>
    );
}

export default Recipe;