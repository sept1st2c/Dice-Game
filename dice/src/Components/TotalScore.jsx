import styles from './TotalScore.module.css'
const TotalScore = ({score}) => {
  return (
        <div className={styles.ScoreContainer}>
                <h1 className={styles.head}>{score}</h1>
                <p className={styles.pp}>Total Score</p>
      </div>
  );
}

export default TotalScore
