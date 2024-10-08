import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [turn, setTrun] = useState(false);
  const [arr, setArr] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);
  const [end, setEnd] = useState(false);

  let successPattern = [
    [0, 1, 2],
    [3, 4, 6],
    [7, 8, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < successPattern.length; i++) {
      console.log(arr, 'arr');
      if (
        arr[successPattern[i][0]] === arr[successPattern[i][1]] &&
        arr[successPattern[i][1]] === arr[successPattern[i][2]] &&
        arr[successPattern[i][0]] === arr[successPattern[i][2]] &&
        arr[successPattern[i][0]] != -1
      ) {
        setEnd(true);
        return;
      } else {
        setEnd(false);
      }
    }
  };

  const handleClick = (e, index) => {
    console.log(e, index);
    if (turn) {
      arr[index] = 0;
    } else {
      arr[index] = 1;
    }
    checkWinner();
    setTrun(!turn);
  };
  return (
    <>
      Tic Tok game goes here
      <div className="mainContainer">
        {arr.map((item, index) => {
          return (
            <button
              className="childBox"
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              disabled={end}
            >
              {item}
            </button>
          );
        })}
      </div>
      {end && <div>Our winner is {turn ? 'X' : 'O'}</div>}
      <button
        onClick={() => {
          window.location.reload();
        }}
        title="Reload"
      >
        Reload
      </button>
    </>
  );
}

export default App;
