import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePi, triplePi } from "./math";


// In place of exporting the pi, double pi and other separately 
// We can simple use
// import * as pi from "./math";
// And here pi will be an object and we can call all the three things be:
// pi.default
// pi.doublePi
// pi.triplePi
// It is always a good practice to use the one given about rather than using the wildcard 
// given in comments.


// Here below double pi is a funciton so we need to specify the ()
ReactDOM.render(
    <ul>
        <li>{PI}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
    </ul>,
    document.getElementById("root")
);
``