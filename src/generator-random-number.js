#!/usr/bin/env node
const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomNumber;
