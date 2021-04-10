import React from "react";
import "./style.css";
// import PlaceholderImg from "../../assets/placeholder-300.png";

export function GoalCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.url}/>
            </div>
        </div>
    )
}