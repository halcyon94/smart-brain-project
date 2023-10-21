import React from 'react';
import Tilt from 'react-tilt';
import brain from './thinking.png';
import './Logo.css'

const Logo = () => {
    return(
         <div className="ma4 mt0">
             <Tilt className='Tilt br2 shadow-2' options={{max : 55}} style={{ height : 150 , width : 150}}>
                <div className="Tilt br2 shadow-2" style={{ height: '150px' , width: '150px' , backgroundColor: 'grey' }}>
                    <h1><img alt="Logo" src={brain}></img></h1>
                </div>
             </Tilt>
        </div>
    );
}

export default Logo;