const inputNumberArray = [];

const addNumberButton = document.querySelector(`#number-button`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(`Clicked`);
  const userInput = document.querySelector(`#number`);

  if (userInput.value === `` || isNaN(userInput.value)) {
    return;
  }

  console.log(`userInput.value: ${userInput.value}`);

  const numberOutput = document.querySelector(`#number-bank-output`);

  const numberLI = document.createElement(`li`)
  numberLI.id = `numberLI-${userInput.value}`;
  numberLI.innerText = userInput.value;
  numberOutput.append(numberLI);


  
  inputNumberArray.push( {value: userInput.value, element: numberLI });

  userInput.value = ``;
  console.log(`inputNumberArray: ${inputNumberArray}`);
  console.log(inputNumberArray);
  console.log(``);


  
  const sortButtons = document.querySelector(`#sortButtons`);

  // Clear any existing event listeners on the sortButtons element
  sortButtons.replaceWith(sortButtons.cloneNode(true));
  const newSortButtons = document.querySelector(`#sortButtons`);

  // Attach the event listener once
  newSortButtons.addEventListener(`click`, (event) => {
    if (event.target.innerText === `Sort 1`) {
      console.log(`A button was clicked`);
  
      // Sort 1: Sort the first element only
      if (inputNumberArray.length > 0) {
        const { value: currentNumber, element: currentElement } = inputNumberArray[0];
  
        if (currentNumber % 2 === 0) {
          const numberEvenOutput = document.querySelector('#evens-output');
          const numberEvenLI = document.createElement('li');
          numberEvenLI.classList.add('evenNumber');
          numberEvenLI.innerText = currentNumber;
          numberEvenOutput.append(numberEvenLI);
        } else {
          const numberOddOutput = document.querySelector('#odds-output');
          const numberOddLI = document.createElement('li');
          numberOddLI.classList.add('oddNumber');
          numberOddLI.innerText = currentNumber;
          numberOddOutput.append(numberOddLI);
        }
  
        inputNumberArray.shift();
        currentElement.remove();
  
        console.log('Remaining elements in the array:', inputNumberArray.map(item => item.value));
      } else {
        console.log('No more elements to sort.');
      }
    } else if (event.target.innerText === `Sort All`) {
      // Sort All: Sort all elements
      while (inputNumberArray.length > 0) {
        const { value: currentNumber, element: currentElement } = inputNumberArray[0];
  
        if (currentNumber % 2 === 0) {
          const numberEvenOutput = document.querySelector('#evens-output');
          const numberEvenLI = document.createElement('li');
          numberEvenLI.classList.add('evenNumber');
          numberEvenLI.innerText = currentNumber;
          numberEvenOutput.append(numberEvenLI);
        } else {
          const numberOddOutput = document.querySelector('#odds-output');
          const numberOddLI = document.createElement('li');
          numberOddLI.classList.add('oddNumber');
          numberOddLI.innerText = currentNumber;
          numberOddOutput.append(numberOddLI);
        }
  
        inputNumberArray.shift();
        currentElement.remove();
      }
  
      console.log('All elements have been sorted.');
    }
  });

});