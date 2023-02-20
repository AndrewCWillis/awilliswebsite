import React from 'react';
import Img from '../resources/bust.png'
const myBust = () => {
    const imgStyles = {
                        borderRadius: "50%",
                        width: 400,
                        hieght: 400,
                    }
    return (  
        <img src={Img} style={imgStyles}/>
    );
}
 
export default myBust;