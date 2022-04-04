function Advice(props) {
    
        const {getNewAdvice} = props;
        const adviceText = props.advice.slip.advice;
        const adviceId = props.advice.slip.id;
        
        return <div className="advice-container">
                <h2>Advice #{adviceId}</h2>
                <p>"When having a clear out, ask yourself if an item has any financial, practical or sentimental value. If not, chuck it."</p>
                <div className="play">
                    <hr/>
                    <button className="button-pause"></button>
                    <hr/>
                </div>

                <figure className="randomAdvice" onClick={getNewAdvice}>
                    <img src="../images/icon-dice.svg" alt="dice-random-advice" />
                </figure>
            </div>
    }
   
export default Advice;