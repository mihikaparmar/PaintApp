import React from 'react';
import brush from './pictures/pencil.png'
import eraser from './pictures/eraser.png'
import bucket from './pictures/bucket.png'

import './Header.css';

function Tools({handleUtensil}) {

    return (
        <div style={{backgroundColor:'lightgrey', padding:'5px', width:'180px', textAlign:"center"}}>
            <button style={{width:"33px", margin:"0 2px"}} name="brush" className="tool-icon" onClick={()=>handleUtensil("brush", "tool")}><img src={brush} style={{width:"12px", margin:"0 2px"}} alt="brush"/></button>
            <button style={{width:"33px"}} name="bucket" className="tool-icon" onClick={()=>handleUtensil("bucket", "tool")}><img src={bucket} style={{width:"12px"}} alt="bucket"/></button>
            <button style={{width:"33px", margin:"0 2px"}} name="eraser" className="tool-icon" onClick={()=>handleUtensil("eraser", "tool")}><img src={eraser} style={{width:"12px"}} alt="eraser"/></button>
        </div>
    );
}

export default Tools;
