function NewAdvice (props){
    const {getNewAdvice} = props;

    return <button className="randomAdvice" onClick={getNewAdvice}>
                <img src="../images/icon-dice.svg" alt="dice-random-advice" />
            </button>
}

export default NewAdvice;