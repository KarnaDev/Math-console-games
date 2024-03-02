import readlineSync from 'readline-sync';

const playGame = (rules, playRound) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(rules);

    for (let i = 1; i <= 3; i += 1) {
      const { userAnswer, correctAnswer } = playRound();
      if (correctAnswer !== userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};

export default playGame;