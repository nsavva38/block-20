const inputNumberArray = [];

const addNumberButton = document.querySelector(`#number-button`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  const userInput = document.querySelector(`#number`);

  if (userInput.value === `` || isNaN(userInput.value)) {
    return;
  }


  const numberOutput = document.querySelector(`#number-bank-output`);

  const numberLI = document.createElement(`li`)
  numberLI.id = `numberLI-${userInput.value}`;
  numberLI.innerText = userInput.value;
  numberOutput.append(numberLI);

  inputNumberArray.push( {value: userInput.value, element: numberLI });

  userInput.value = ``;

  
  const sortButtons = document.querySelector(`#sortButtons`);

  sortButtons.replaceWith(sortButtons.cloneNode(true));
  const newSortButtons = document.querySelector(`#sortButtons`);

  newSortButtons.addEventListener(`click`, (event) => {
    if (event.target.innerText === `Sort 1`) {

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
  
      } 

    } else if (event.target.innerText === `Sort All`) {
    
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

    }

  });

});