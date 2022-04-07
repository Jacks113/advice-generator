import { useEffect, useState } from 'react';
import './App.css';
import Advice from './Components/Advice';
import NewAdvice from './Components/NewAdvice';
import getAdvice from './Services/getAdvice';

function App() {

  const [advice, setAdvice] = useState("");
  const [adviceError, setAdviceError] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  getAdvice(setAdvice, setAdviceError);
  }
  ,[])


  const getNewAdvice = () =>{
    getAdvice(setAdvice, setAdviceError);  
    // console.log("get new advice clicked");
  }

  if(adviceError){
    alert("Couldn't get advice, please wait a few moments and refresh");
  }

  
  return (
    <div className="App">

      <main className='advice-container'>
        { advice !== "" && advice !== null ? <Advice advice = {advice}/>  :""}
        <NewAdvice getNewAdvice={getNewAdvice}/>      
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Jacks113">AH</a>.    
      </footer>
     
    </div>
  );
}

export default App;
