import React from "react";
import pfp from "./images/pfp.jpg"

const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return(
        <div className = "item">
            <img className = "ui avatar image" src={pfp} alt="pfp" />
           <div className = "content">
            <div className = "header">{name}
                <div>{email}</div>
                </div></div> 
                <i 
                className="trash alternate outline icon"
                style={{color:"red", marginTop:"7px"}}
                onClick={() => props.clickHandler(id)} >
                </i>
        </div>
    );


    
};

export default ContactCard;