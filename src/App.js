import { useEffect, useState } from 'react';
import './App.css';
import Advice from './Components/Advice';
import getAdvice from './Services/adviceData';

function App() {

  const [advice, setAdvice] = useState("");
  const [adviceError, setAdviceError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("")
    // .then(result => result.json())
    //     .then( (result) => setAdvice({result})),
    //         (error) => {setAdviceError({error})} 

    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (result) => {
          setAdvice(result)
        },
        (error) => {
          setAdviceError(error);
        }
      )
  }
  ,[])

  
  return (
    <div className="App">

      { advice !== "" && advice !== null ? <Advice advice = {advice}/> :""}      

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Jacks113"> AH</a>.
      </div>
    </div>
  );
}

export default App;
