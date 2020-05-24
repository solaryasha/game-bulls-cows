'use strict';

const results = document.querySelector('.results');
const form = document.querySelector('.input__user');
// const area = document.querySelector('.input__area');
// const submit = document.querySelector('.input__submit');
const error = document.querySelector('.input__error');

const generateRandomDigit = () => `${Math.floor(Math.random() * 10)}`;
const machineNumber = generateNumber();

form.addEventListener('submit', event => {
  event.preventDefault();

  let userInput = '';

  const uniqueSymbols = /^(?:(\d)(?!.*\1))*$/;

  for (const item of form.elements) {
    userInput += item.value;
  }

  if (!uniqueSymbols.test(userInput)) {
    error.innerHTML = 'IDIOT!!!';
  } else {
    error.innerHTML = 'Well done';
    resultsRow(userInput);
  }
});

function resultsRow(userInput) {
  const row = document.createElement('div');

  row.classList.add('results__row');
  results.appendChild(row);

  const guessed = document.createElement('div');

  guessed.classList.add('results__guessed');
  guessed.innerHTML = userInput;
  row.appendChild(guessed);

  const cows = document.createElement('div');

  cows.classList.add('results__cows');
  cows.innerHTML = bullAndCows(machineNumber, userInput)['cows'];
  row.appendChild(cows);

  const bulls = document.createElement('div');

  bulls.classList.add('results__bulls');
  bulls.innerHTML = bullAndCows(machineNumber, userInput)['bulls'];
  row.appendChild(bulls);
}

function generateNumber() {
  let generatedNumber = '';

  for (let i = 0; i < 4; i++) {
    let digit = generateRandomDigit();

    while (generatedNumber.includes(digit)) {
      digit = generateRandomDigit();
    }
    generatedNumber += digit;
  }

  return generatedNumber;
}

function bullAndCows(generatedNumber, enteredNumber) {
  // write code here
  const storage = {};
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < generatedNumber.length; i++) {
    storage[generatedNumber[i]] = i;
  }

  for (let i = 0; i < enteredNumber.length; i++) {
    const currentValue = enteredNumber[i];
    // check for repeating numbers

    if (currentValue === enteredNumber[i + 1]) {
      return undefined;
    }

    if (storage.hasOwnProperty(currentValue)) {
      if (storage[currentValue] === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  const yourAnswer = {
    'bulls': bulls,
    'cows': cows,
  };

  return yourAnswer;
}
