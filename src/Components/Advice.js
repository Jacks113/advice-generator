import React from "react";
import { Component } from "react";



class Advice extends Component {
    
    render(){
       
        const adviceText = this.props.advice.slip.advice;
        const adviceId = this.props.advice.slip.id;
        
        return <div className="advice-container">
                <h2>Advice #{adviceId}</h2>
                <p>{adviceText}</p>
                <div className="play">
                    <hr/>
                    <button onClick={e=>alert("new click")} className="button-pause"></button>
                    <hr/>
                </div>
            </div>
    }
   
}

export default Advice;