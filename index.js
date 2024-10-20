console.log(`test`);

//43 minutes in, Buttons when clicked
//58 minutes, 
//how to remove item

const addNumberButton = document.querySelector(`#number-button`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(`Clicked`);
  const userInput = document.querySelector(`input`);
  console.log(`userInput.value: ${userInput.value}`);

  const numberOutput = document.querySelector(`#number-bank-output`);

  const numberLI = document.createElement(`li`)
  numberLI.classList.add(`inputNumber`);

  numberLI.innerText = userInput.value;
  numberOutput.append(numberLI);


  const inputNumber = document.querySelectorAll(`.inputNumber`);
  const inputArray = [...inputNumber];

  let inputNumberArray = inputArray.map((item) => {
    return Number(item.textContent);
  });

  console.log(`inputNumberArray: ${inputNumberArray}`);
  console.log(``);



  
  const sortButtons = document.querySelector(`#sortButtons`);

  sortButtons.addEventListener(`click`, (event) => {
    numberLI.remove();
    console.log(event);
    if (event.target.tagName === `BUTTON`) {
      console.log(`A button was clicked`);
   
      if(event.target.innerText === `Sort 1`) {
        // sort 1

        // go to even pile
        if(inputNumberArray[0] % 2 === 0) {

          const numberEvenOutput = document.querySelector(`#evens-output`);

          const numberEvenLI = document.createElement(`li`)
          numberEvenLI.classList.add(`evenNumber`);
        
          numberEvenLI.innerText = inputNumberArray[0];
          numberEvenOutput.append(numberEvenLI);


        } else {

          // go to odd pile
          const numberOddOutput = document.querySelector(`#odds-output`);

          const numberOddLI = document.createElement(`li`)
          numberOddLI.classList.add(`oddNumber`);
        
          numberOddLI.innerText = inputNumberArray[0];
          numberOddOutput.append(numberOddLI);

        }

        console.log(`before sort: ${inputNumberArray}`);

        for (let i = 0; i < inputNumberArray.length; i++) {

          if( (i + 1) === inputNumberArray.length) {
            inputNumberArray.pop();
          } else {
            inputNumberArray[i] = inputNumberArray[i + 1];
          }
          inputNumberArray[i] = inputNumberArray[i + 1];

          console.log(`after sort: ${inputNumberArray}`);
          console.log(``);
          

        }

      } else if (event.target.innerText === `Sort All`) {
        // sort all

        for (let i = 0; i < inputNumberArray.length; i++) {

          if(inputNumberArray[0] % 2 === 0) {

            const numberEvenOutput = document.querySelector(`#evens-output`);
  
            const numberEvenLI = document.createElement(`li`)
            numberEvenLI.classList.add(`evenNumber`);
          
            numberEvenLI.innerText = inputNumberArray[0];
            numberEvenOutput.append(numberEvenLI);
  
  
          } else {
  
            // go to odd pile
            const numberOddOutput = document.querySelector(`#odds-output`);
  
            const numberOddLI = document.createElement(`li`)
            numberOddLI.classList.add(`oddNumber`);
          
            numberOddLI.innerText = inputNumberArray[0];
            numberOddOutput.append(numberOddLI);
  
          }
  
          console.log(`before sort: ${inputNumberArray}`);

          if( (i + 1) === inputNumberArray.length) {
            inputNumberArray.pop();
          } else {
            inputNumberArray[i] = inputNumberArray[i + 1];
          }
          inputNumberArray[i] = inputNumberArray[i + 1];

          
          

        }
        console.log(`after sort: ${inputNumberArray}`);
        console.log(``);




        // to reset the array:
        inputNumberArray = [];

      }

    }

    },{ once: true }); // The listener is removed after being called once),


});