// 'use strict';

// function bullsAndCows(generatedNumber, enteredNumber) {
//   // write code here
//   const storage = {};
//   let cows = 0;
//   let bulls = 0;

//   for (let i = 0; i < generatedNumber.length; i++) {
//     storage[generatedNumber[i]] = i;
//   }

//   for (let i = 0; i < enteredNumber.length; i++) {
//     const currentValue = enteredNumber[i];
//     // check for repeating numbers

//     if (currentValue === enteredNumber[i + 1]) {
//       return undefined;
//     }

//     if (storage.hasOwnProperty(currentValue)) {
//       if (storage[currentValue] === i) {
//         bulls++;
//       } else {
//         cows++;
//       }
//     }
//   }

//   const yourAnswer = {
//     'bulls': bulls,
//     'cows': cows,
//   };

//   return yourAnswer;
// }

// export default bullsAndCows;
