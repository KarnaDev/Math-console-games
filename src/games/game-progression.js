import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (length) => {
  const initialNum = getRandomNumber(20);
  const progression = [initialNum];
  const step = getRandomNumber(5, 2);

  for (let i = 1; i < length; i += 1) {
    progression.push(initialNum + step * i);
  }

  return progression;
};

const playRound = () => {
  const length = getRandomNumber(10, 5);
  const progression = generateProgression(length);
  const indexRandom = getRandomNumber(length - 1);

  const correctAnswer = progression[indexRandom].toString();
  const progressionHidden = progression.map((num, i) => (i === indexRandom ? '..' : num));

  console.log(`Question: ${progressionHidden.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return { userAnswer, correctAnswer };
};

const playBrainProgression = () => playGame(rules, playRound);

export default playBrainProgression;
