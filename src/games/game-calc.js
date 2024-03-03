import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const rules = 'What is the result of the expression?';

const operators = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  // To add complexity to the game, uncomment the division operator
  // '/': (x, y) => x / y
};

// To add complexity to the game, elevate the value
const maxNumber = 10;

const playRound = () => {
  const operatorsKeys = Object.keys(operators);
  const number1 = getRandomNumber(maxNumber);
  const number2 = getRandomNumber(maxNumber);
  const randomIndex = getRandomNumber(operatorsKeys.length - 1);
  const randomOperator = operatorsKeys[randomIndex];
  const correctAnswer = operators[randomOperator](number1, number2);
  console.log(`Question: ${number1} ${randomOperator} ${number2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return { userAnswer, correctAnswer };
};

const playBrainCalc = () => playGame(rules, playRound);

export default playBrainCalc;
