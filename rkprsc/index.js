const computerPlay = () => {
  const cpu = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * cpu.length)
  return cpu[random];
};

const playerPlay = () => {
  // const choice = prompt('Rock, Paper, Scissors...');
  const player = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * player.length)
  // return choice.toLowerCase();
  return player[random];
};

let playerScore = 0;
let computerScore = 0;

// Rock beat Scissors, Scissors beat paper, Paper bea Rock
// function playGame(playerPlay, computerPlay) {
//   if (playerPlay === computerPlay) {
//     return `The game is a tie`
//   } else if (playerPlay === 'rock' && computerPlay !== 'paper' || playerPlay === 'scissors' && computerPlay !== 'rock' || playerPlay === 'paper' && computerPlay !== 'scissors') {
//     playerScore ++;
//     return `You Win! ${playerPlay} beats ${computerPlay}`
//   } else {
//     computerScore ++;
//     return `You Lose! ${computerPlay} beats ${playerPlay}`
//   }
// }

// Rock beat Scissors, Scissors beat paper, Paper bea Rock
function playGame(playerPlay, computerPlay) {
  if (playerPlay === computerPlay) {
    return `The game is a tie`
  } else if (playerPlay === 'rock' && computerPlay !== 'paper' || playerPlay === 'scissors' && computerPlay !== 'rock' || playerPlay === 'paper' && computerPlay !== 'scissors') {
    playerScore ++;
    return `You Win! ${playerPlay} beats ${computerPlay}`
  } else {
    computerScore ++;
    return `You Lose! ${computerPlay} beats ${playerPlay}`
  }
  playerScore
}

// function rounds() {
  
//   for (let i = playerScore; playerScore = 5; i++) {
//     playGame(playerPlay(), computerPlay());
//   }
//   return playerScore
// };

// console.log(rounds())

  // }
// for (let i = playerScore; playerScore = 5; i++) {
//   console.log(playGame(playerPlay(), computerPlay()))
// }

function five() {
  let human = playerScore;
  let cpu = computerScore;
  let game = playGame(playerPlay(), computerPlay())
  
  console.log(game)
  // console.log(`human ${human}`)
  // console.log(`cpu ${cpu}`)
  // console.log(game.indexOf('Win'))
  
}

console.log(five());

// console.log(playGame(playerPlay(), computerPlay()));

console.log(`player: ${playerScore}`);
console.log(`computer: ${computerScore}`);