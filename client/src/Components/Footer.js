import React from 'react'
import {Link } from "react-router-dom";
const Footer = (props) => {

    
    
    
    return (
        <div style={{border : "2px black solid", width : "fit-content", margin : " 50px auto", padding: "10px" }}>
            
            
            <button><Link to={"/" }>List</Link></button>
            <button><Link to={"/analyize" }>Analyize</Link></button>
        </div>
    )
}
    
export default Footer;