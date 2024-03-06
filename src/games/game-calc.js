import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

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
  const correctAnswer = operators[randomOperator](number1, number2).toString();
  const question = (`${number1} ${randomOperator} ${number2}`);
  return { question, correctAnswer };
};

const playBrainCalc = () => playGame(description, playRound);

export default playBrainCalc;
