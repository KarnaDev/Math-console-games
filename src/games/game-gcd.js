import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  for (let i = Math.min(num1, num2); i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const playRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();

  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = getGreatestCommonDivisor(randomNum1, randomNum2);
  return { userAnswer, correctAnswer };
};

const playBrainGcd = () => playGame(rules, playRound);

export default playBrainGcd;
