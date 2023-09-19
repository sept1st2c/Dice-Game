
import styled from 'styled-components';
const RoleDice = ({roledice,currentdice}) => {
  


  return (

    <DiceContainer>
        <div className='dice' onClick={roledice}>
          <img src={`/images/dice_${currentdice}.png`} alt='dices' className='logo1' />

        </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
  .logo1 {
    will-change: filter;
    filter: drop-shadow(0 0 2em #ffffffaa);
    transition: filter 300ms;
    transition: 0.3s ease-in-out;
  }
.logo1:hover {
  filter: drop-shadow(0 0 5em #ffffffaa);
  scale: 85%;
}
`;
