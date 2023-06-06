import React from "react";
import '../../styles/card.css';
import { Outlet } from "react-router-dom";

export const Card = (props) => {
    return (
        <div className="basic-card">
            {props.children}
        </div>
    );
};