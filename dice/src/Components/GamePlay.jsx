import TotalScore from "./TotalScore";
import styled from 'styled-components';
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { useState } from 'react';
const GamePlay = () => {
  const [score,setscore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState(); 
  const [currentdice, setcurrentdice] = useState(1);
  const [error,seterror] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()* (max-min)+min);
  };
  const roledice = () => {
    
      if(!selectedNumber) 
      {
        seterror("Select a number first!")
        return;
      }
      seterror("")
      const randomnumber = generateRandomNumber (1,7);
      setcurrentdice((prev) => randomnumber);


      if (selectedNumber==randomnumber)
      {
        setscore((prev) => prev + randomnumber)
      }
      else
      {
        setscore((prev) => prev - 1)
      }
      setSelectedNumber(undefined);
  }

  const resetScore = () => {
    setScore(0);
  };





  return (
    <div className="animate2">
 
        <MainContainer >
                <div className="topsection">
                        <TotalScore 
                        score={score}
                        />
                        <NumberSelector 
                        error={error}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}
                        />
                </div>
                <RoleDice 
                roledice={roledice}
                currentdice={currentdice}
                />
                <div className="btns">
                  <button className="butt1" onClick={resetScore}>RESET</button>
                  <button className="butt2" onClick={() => setshowRules((prev) => !prev)}>
                    Show Rules
                  </button>
                </div>
                {showRules && <Rules />}
        </MainContainer>
    </div>

       
  )
};

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .topsection {
      display: flex;
      justify-content: space-around;
      align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .butt1{
    color: #000000;
    padding: 10px 18px;
    background: #ffffff;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.4s background ease-in;
  
  }
  .butt1:hover {
    background-color: #000000;
    border: 1px solid black;        
    color: #ffffff;
    transition: 0.3s background ease-in;
  }
  .butt2{
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;
  
  }
  .butt2:hover {
    background-color: white;
    border: 1px solid black;        
    color: black;
    transition: 0.3s background ease-in;
  }
  .intro {
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                background-color: rgb(0, 0, 0);
                transition: 1s;
        }
        .logohead {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: rgb(234, 245, 255);
        }
        .logo {
                position: relative;
                display: inline block;
                bottom: -20px;
                opacity: 0;

        }
        .logo.active {
                bottom: 0;
                opacity: 1;
                transition: ease-in-out 1s;
        }
        .logo.fade {
                bottom: 150px;
                opacity: 0;
                transition: ease-in-out 1s;

        }


  `;