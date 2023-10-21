import React from 'react'
import {Link } from "react-router-dom";
import defaultimage from "../Images/defaultimage.png"
import avatar from "../Images/avatar.png"
    
const Header = (props) => {
    
    
    return (
        <div>
            <img style={{width:"50px"}} src={defaultimage} ></img>
            <img style={{width:"50px"}} src={avatar} ></img>

        </div>
    )
}
    
export default Header;