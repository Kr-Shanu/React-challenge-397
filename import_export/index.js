import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math";


// Here below double pi is a funciton so we need to specify the ()
ReactDOM.render(
    <ul>
        <li>{PI}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
    </ul>,
    document.getElementById("root")
);
