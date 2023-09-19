import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";
import { useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    } , 3000)
  },[])

  const [isGameStarted,setIsGameStarted] = useState(false);
  
  const toggleGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <div>
      {
        loading ?
        <div className="load animate">
        <ClimbingBoxLoader

        color={'#000000'}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>

      :
      isGameStarted ? <div ><GamePlay/></div> : <div><StartGame toggle={toggleGame} /> </div>
      }

    { 
    
    }
    </div>
  );
}

export default App
