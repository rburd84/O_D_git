const computerPlay = () => {
  const cpu = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * cpu.length)
  return cpu[random];
};

const playerPlay = () => {
  const player = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * player.length)
  return player[random];
};



// Rock beat Scissors, Scissors beat paper, Paper bea Rock
function playGame(playerPlay, computerPlay) {
  if (playerPlay === 'rock' && computerPlay === 'rock' || playerPlay === 'scissors' && computerPlay === 'scissors' || playerPlay === 'paper' && computerPlay === 'paper') {
    return `The game is a tie`
  } else if (playerPlay === 'rock' && computerPlay !== 'paper' || playerPlay === 'scissors' && computerPlay !== 'rock' || playerPlay === 'paper' && computerPlay !== 'scissors') {
    return `You Win! ${playerPlay} beats ${computerPlay}`
  } else {
    return `You Lose! ${computerPlay} beats ${playerPlay}`
  }
}

// console.log(computerPlay());
// console.log(playerPlay());
console.log(playGame(playerPlay(), computerPlay()));