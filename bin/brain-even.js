#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log(global.name); // Проверяем, правильно ли установлена глобальная переменная name, получаем undefined

const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const isEven = (number) => (number % 2 === 0) ? 'yes' : 'no';
   
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 20);

    const userAnswer = readlineSync.question(`Question: ${number} `);
    
    const correctAnswer = isEven(number);
  
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${global.name}!`) // Используем глобальную переменную
      return;
    } else {
      console.log(`Correct!`);
    }
  }
  return console.log(`Congratulations, ${global.name}!`) // Используем глобальную переменную
};

playBrainEven();


