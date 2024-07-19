import React from 'react';
import DarkMode from "./DarkMode/DarkMode";
import "../index.css";
import "./App.css";


const Header = () => {
    return(

    <div className="ui fixed menu">
        <div className = "ui container header-container" style={headerContainerStyle}>
            <h2 className="header-title">Contact Manager</h2>
            <DarkMode/>

        </div>
    </div>
    );
}; 

export default Header;

const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
}