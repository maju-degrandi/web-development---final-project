import React from "react";
import '../../styles/card.css';

export const Card = (props) => {
    return (
        <div className="back-card">
            <div className="basic-card">
                {props.children}
            </div>
        </div>
    );
};