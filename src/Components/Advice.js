function Advice(props) {
    
     
        const adviceText = props.advice.slip.advice;
        const adviceId = props.advice.slip.id;
        
        return <div className="advice-content">

                <h1>Advice #{adviceId}</h1>

                <div className="advice-quote">
                    <blockquote>"{adviceText}"</blockquote>
                </div>

                <div className="play">
                    <hr/>
                    <p className="button-pause"></p>
                    <hr/>
                </div>
              

            </div>
    }
   
export default Advice;