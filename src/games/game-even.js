import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const playRound = () => {
  const number = getRandomNumber();
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playBrainEven = () => playGame(description, playRound);

export default playBrainEven;
