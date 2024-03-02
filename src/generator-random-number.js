#!/usr/bin/env node
const getRandomNumber = (max = 100, min = 0) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
};

export default getRandomNumber;