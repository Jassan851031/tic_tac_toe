import React from 'react';


const UsersName = (props) => {
    //const [player1, setPlayer1] = useState('');
    //const [player2, setPlayer2] = useState('');
  
    return (
      <div className="container">
        <input type="text" name="playerX" onChange={(e) => props.funcS(e)} placeholder="Player 1" />
        <input type="text" name="playerO" onChange={(e) => props.funcS(e)} placeholder="Player 2" />
        <button onClick={() => props.funcZ('X')}>Play X</button>
        <button onClick={() => props.funcZ('O')}>Play O</button>
      </div>
    )
  }


  export default UsersName;