import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  for (let i = Math.min(num1, num2); i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivisor(number1, number2).toString();
  return { question, correctAnswer };
};

const playBrainGcd = () => playGame(description, playRound);

export default playBrainGcd;
