
export default function getAdvice(setAdvice, setAdviceError){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(
      (adviceData) => {
        setAdvice(adviceData)
      },
      (error) => {
        setAdviceError(error);
      }
    )
}