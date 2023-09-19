import Preloader from "./Preloader";

import styles from "./StartGame.module.css";
const StartGame = ( {toggle} ) => {
        return (
          
          <div className="animate2">
                <div className={styles.container}  >
                  
                  <div>
                    <img src="/images/dices 1.png" alt="loool"/>
                  </div>
                  <div className="content">
                    <h1 className={styles.header}>DICE GAME</h1>
                    <button className={styles.butt} onClick={toggle}>Play Now</button>
                  </div>
                </div>
          </div>
              );
            };

export default StartGame


