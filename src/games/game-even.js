import readlineSync from 'readline-sync';
import getRandomNumber from '../generator-random-number.js';
import playGame from '../index.js';

const rules = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';
const isEven = (number) => (number % 2 === 0);

const playRound = () => {
    const number = getRandomNumber();
    console.log(`Question: ${number} `);
    const userAnswer = readlineSync.question(`Your answer: `);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return { userAnswer, correctAnswer };
}

const playBrainEven = () => playGame(rules, playRound);

export default playBrainEven;
