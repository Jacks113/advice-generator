function Advice(props) {
    
     
        const adviceText = props.advice.slip.advice;
        const adviceId = props.advice.slip.id;
        
        return <div className="advice-content">
                <h2>Advice #{adviceId}</h2>
                <blockquote>"{adviceText}"</blockquote>
                <div className="play">
                    <hr/>
                    <p className="button-pause"></p>
                    <hr/>
                </div>
              
            </div>
    }
   
export default Advice;