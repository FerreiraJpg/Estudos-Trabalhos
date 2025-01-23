const readline = require('readline');

// Cria uma interface de leitura com o terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const NUMBERS = Array.from({ length: 9 }, (_, i) => i + 1);
const WINNING_TOTAL = 15;
let availableNumbers = [...NUMBERS];
let playerTotal = 0;
let aiTotal = 0;
let playerTurn = true;

function printStatus() {
  console.log(`Números disponíveis: ${availableNumbers.join(', ')}`);
  console.log(`Total do jogador: ${playerTotal}`);
  console.log(`Total da IA: ${aiTotal}`);
  console.log(`É a vez do ${playerTurn ? 'jogador' : 'IA'}.`);
}

function checkWin() {
  if (playerTotal === WINNING_TOTAL) {
    console.log(`O jogador venceu com um total de ${playerTotal}!`);
    rl.close();
  } else if (aiTotal === WINNING_TOTAL) {
    console.log(`A IA venceu com um total de ${aiTotal}!`);
    rl.close();
  }
}

function playerMove() {
  printStatus();
  rl.question('Escolha um número disponível: ', (input) => {
    const number = parseInt(input, 10);
    if (availableNumbers.includes(number)) {
      availableNumbers = availableNumbers.filter(num => num !== number);
      playerTotal += number;
      checkWin();
      if (playerTotal < WINNING_TOTAL) {
        playerTurn = false;
        aiMove();
      }
    } else {
      console.log('Número inválido ou já usado. Tente novamente.');
      playerMove();
    }
  });
}

function aiMove() {
  if (availableNumbers.length === 0) {
    console.log('Nenhum número disponível para a IA.');
    rl.close();
    return;
  }

  const number = getRandomNumber();
  console.log(`A IA escolheu o número ${number}.`);
  availableNumbers = availableNumbers.filter(num => num !== number);
  aiTotal += number;
  checkWin();
  if (aiTotal < WINNING_TOTAL) {
    playerTurn = true;
    playerMove();
  }
}

function getRandomNumber() {
  const index = Math.floor(Math.random() * availableNumbers.length);
  return availableNumbers[index];
}

// Início do jogo
console.log('Bem-vindo ao jogo! O primeiro a alcançar exatamente 15 ganha.');
playerMove();
