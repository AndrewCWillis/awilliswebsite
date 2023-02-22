import React, { useState } from 'react';
import Me from '../components/myBust.js'
/*
    - displays a picture of me right now, not sure what else I will put in here

*/
const Sidebar = () => {
    const sidebar = {
        position: "fixed",
        /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
        height: "100%",
        width: 450,
        /* Set the width of the sidebar */
        zIndex: "1",
        /* Stay on top of everything */
        top: "3.4em",
        /* Stay at the top */
        backgroundColor: "#222",
        /* Black */
        overflowX: "hidden",
        /* Disable horizontal scroll */
        paddingTop: "10px",
        top: "0",
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
    }
    return ( 
            <div style = {sidebar}>
                <Me /> 
            </div>
     );
}
 
export default Sidebar;