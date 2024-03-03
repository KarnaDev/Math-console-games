import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

const playBrainPrime = () => playGame(rules, playRound);

export default playBrainPrime;
