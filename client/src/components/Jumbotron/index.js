import React from "react";
import logo from "../../assets/vision-logo.ico"
import { Link } from "react-router-dom"


export function Jumbotron() {
    return (
        <div className="jumbotron">
            <p>logout</p>
            <Link to={"/"}>
            <img src={logo} alt="vision-logo"
                onClick={()=>{console.log("hi")}}>
            </img>
            </Link>
            
        </div>
    );
}

