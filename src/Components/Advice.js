import React from "react";
import { Component } from "react";



class Advice extends Component {
    render(){
         return <div className="advice-container">
                <h2>Advice #117</h2>
                <p>"Sometimes, you just need to say sorry. Even if it's not your fault."</p>
                <div className="play">
                    <hr/>
                    <button onClick={e=>alert("new click")} className="button-pause"></button>
                    <hr/>
                </div>
            </div>
    }
   
}

export default Advice;