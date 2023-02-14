import './App.css';
import React, { useState, useEffect } from 'react';

const Shifumi = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  useEffect(() => {
    if (winner === 'Player' && 'Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('You won!', {
            body: 'Congratulations!',
            icon: '/path/to/icon.png'
          });
        }
      });
    }
  }, [winner]);

  const handlePlayerChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      setWinner('Player');
    } else if (choice === computerChoice) {
      setWinner('Tie');
    } else {
      setWinner('Computer');
    }
  };

  return (
    <div>
      <h1>Shifumi</h1>
      <div>
        <button onClick={() => handlePlayerChoice('rock')}>Rock</button>
        <button onClick={() => handlePlayerChoice('paper')}>Paper</button>
        <button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
      </div>
      {playerChoice && (
        <div>
          <p>You chose: {playerChoice}</p>
          <p>The computer chose: {computerChoice}</p>
          <p>{winner === 'Tie' ? 'Tie!' : `Winner: ${winner}`}</p>
        </div>
      )}
    </div>
  );
};

export default Shifumi;
