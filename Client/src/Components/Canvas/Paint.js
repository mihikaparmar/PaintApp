import React, { useState } from 'react';
import Navbar from '../navbar/Navbar'
import Header from './Header';
import DrawContainer from './DrawContainer'



function Paint() {
    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    })

    function handleUtensil(updateItem, keyHolder) {
        const newUtensil = { ...utensil }
        if (updateItem === "eraser") {
            newUtensil["color"] = "white";
            newUtensil["tool"] = "eraser";
            SetUtensil(() => newUtensil)
        } else {
            newUtensil[keyHolder] = updateItem.toLowerCase()
            SetUtensil(() => newUtensil)
        }
    }

    return (
        <div className="container">
            
            <Header handleUtensil={handleUtensil} utensil={utensil} />
            <DrawContainer utensil={utensil} />
        </div>
    );
}

export default Paint;
