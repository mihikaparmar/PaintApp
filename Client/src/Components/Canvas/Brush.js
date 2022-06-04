import React from 'react';

function Brush({handleUtensil}) {
    
    return (
        <>
            <select onChange={(event)=>handleUtensil(event.target.value, "weight")} id="brush-detail">
                <option value="2">Thin</option>
                <option selected value="5">Normal</option>
                <option value="9">Thick</option>
            </select>
        </>
    );
}

export default Brush;
