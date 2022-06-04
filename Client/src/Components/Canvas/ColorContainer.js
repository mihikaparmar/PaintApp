import React, {useState} from 'react';
import ColorCard from './ColorCard'
import brush from './pictures/pencil.png'
import eraser from './pictures/eraser.png'
import bucket from './pictures/bucket.png'
import './Header.css'

const colorList = ["#ffffff", "#c1c1c1", "#ef130b", "#ff7100", "#ffe400", "#00cc00", "#00b2ff", "#231fd3", "#a300ba", "#d37caa", "#a0522d",
//Row 2
"#000000", "#4c4c4c", "#740b07", "#c23800", "#e8a200","#005510", "#00569e", "#0e0865", "#550069"];

function ColorContainer({handleUtensil, utensil}) {
    
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)

    return (
        <>
        <div id="color-grid">
            {colorGrid}
        </div>
        <div className='selected-box'>
            <p className="selected-color">Color
                <div style={{backgroundColor:`${utensil.color}`}}>
                </div>
            </p>
            <p className="selected-tool">Tool
                <img src={utensil.tool === "brush" ? brush : utensil.tool === "eraser" ? eraser : bucket} style={{width:"20px", margin:"0 0 0 9px"}} alt="brush"/>
            </p>
        </div>
        </>
    );
}

export default ColorContainer;
