import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (length) => {
  const initialNum = getRandomNumber();
  const progression = [initialNum];
  // To add complexity to the game, increase one or both values of the progression step
  const stepMin = 2;
  const stepMax = 5;
  const step = getRandomNumber(stepMax, stepMin);

  for (let i = 1; i < length; i += 1) {
    progression.push(initialNum + step * i);
  }

  return progression;
};

const playRound = () => {
  // To alter the potential number of characters in the progression,
  // increase or decrease the values accordingly
  const lengthMin = 5;
  const lengthMax = 10;
  const length = getRandomNumber(lengthMax, lengthMin);
  const progression = generateProgression(length);
  const indexRandom = getRandomNumber(length - 1);

  const correctAnswer = progression[indexRandom].toString();
  const progressionHidden = progression.map((num, i) => (i === indexRandom ? '..' : num));

  console.log(`Question: ${progressionHidden.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return { userAnswer, correctAnswer };
};

const playBrainProgression = () => playGame(description, playRound);

export default playBrainProgression;
