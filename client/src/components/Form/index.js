import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className = "form-control" {...props} />
        </div>
    );
};

export function FormBtn(props) {
    return (
        <button {...props} className = "btn btn-secondary">
            {props.children}
        </button>
    )
}

export function Select(props) {
    return (
        <div className="form-group">
            <select multiple className = "form-control" {...props}>
                {props.children}
            </select>
        </div>
    );
};