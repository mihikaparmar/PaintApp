import React from 'react';
import Tools from './Tools';
import ColorContainer from './ColorContainer';
import Brush from './Brush';
import './Header.css'

function Header({handleUtensil, utensil}) {
    return (
        <>
          
            <div id="header">
                <Tools handleUtensil={handleUtensil}/>
                <Brush handleUtensil={handleUtensil}/>
                <ColorContainer handleUtensil={handleUtensil} utensil={utensil}/>
            </div>
        </>
    );
}

export default Header;