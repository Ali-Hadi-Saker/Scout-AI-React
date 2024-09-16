import React from "react";
import "./style.css";

const Button = ({onMousseClick}) => {
    return (
    <button 
        className={`flex center rounded clickable bold full-width button`} 
        onClick={onMousseClick}>
        Login
    </button>
    );
};

export default Button;
