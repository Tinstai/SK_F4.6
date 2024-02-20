import React from "react";


function Step(props) {

    return(
        <>
            <tr key={props.step.id}>
                <td>{props.index}</td>
                <td>
                    <img src={props.step.photo} className="photo_of_dish"/>    
                </td>
                <td>{props.step.description}</td>
            </tr>
        </>
    );
}

export default Step;