import { useEffect, useState } from 'react';
import './App.css';
import Advice from './Components/Advice';
import getAdvice from './Services/getAdvice';

function App() {

  const [advice, setAdvice] = useState("");
  const [adviceError, setAdviceError] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("")
    // .then(result => result.json())
    //     .then( (result) => setAdvice({result})),
    //         (error) => {setAdviceError({error})} 

  getAdvice(setAdvice, setAdviceError);
  }
  ,[])


  const getNewAdvice = () =>{
    getAdvice(setAdvice, setAdviceError);  
    console.log("get new advice clicked");
  }
  
  return (
    <div className="App">

      { advice !== "" && advice !== null ? <Advice getNewAdvice={getNewAdvice} advice = {advice}/>  :""}      


     
    </div>
  );
}

export default App;
