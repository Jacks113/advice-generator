import React from "react";
import { Component } from "react";
import getAdvice from "../Services/getAdvice";



function Advice(props) {
    
        const {getNewAdvice} = props;
        const adviceText = props.advice.slip.advice;
        const adviceId = props.advice.slip.id;
        
        return <div className="advice-container">
                <h2>Advice #{adviceId}</h2>
                <p>{adviceText}</p>
                <div className="play">
                    <hr/>
                    <button className="button-pause"></button>
                    <hr/>
                </div>

                <figure className="randomAdvice" onClick={getNewAdvice}>
                    <img src="../images/icon-dice.svg"/>
                </figure>
            </div>
    }
   
export default Advice;