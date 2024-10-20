console.log(`test`);

//43 minutes in, Buttons when clicked
//58 minutes, 
//how to remove item

const addNumberButton = document.querySelector(`#number-button`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(`Clicked`);
  const userInput = document.querySelector(`input`);
  console.log(`userInput: ${userInput}`);
  console.log(`userInput.value: ${userInput.value}`);

  const numberOutput = document.querySelector(`#number-bank-output`);

  const numberLI = document.createElement(`li`)
  numberLI.classList.add(`inputNumber`);

  numberLI.innerText = userInput.value;
  numberOutput.append(numberLI);


  const inputNumber = document.querySelectorAll(`.inputNumber`);
  const inputArray = [...inputNumber];
  console.log(`inputArray: ${inputArray[0].textContent}`);

  const inputNumberArray = inputArray.map((item) => {
    return Number(item.textContent);
  });

  console.log(`inputNumberArray: ${inputNumberArray}`);




  const sortButtons = document.querySelector(`#numberBank`); // or #sortedButtons

  console.log(`numberOutput: ${numberOutput}`);
  console.log()

  sortButtons.addEventListener(`click`, (event) => {

    event.preventDefault();

    numberLI.remove();

    console.log(event);
    if(event.target.tagName === `BUTTON`) {
      console.log(`A button was clicked`);
      if(event.target.innerText === `Sort 1`) {
        //sort 1

        //take the first number in the inputNumberArray
        const toSortOne = inputNumberArray[0];

        //go to even pile
        if(toSortOne % 2 === 0) {

        


          const numberEvenOutput = document.querySelector(`#evens-output`);

          const numberEvenLI = document.createElement(`li`)
          numberEvenLI.classList.add(`evenNumber`);
        
          numberEvenLI.innerText = toSortOne;
          numberEvenOutput.append(numberEvenLI);



          // const numberOutput = document.querySelector(`#number-bank-output`);

          // const numberLI = document.createElement(`li`)
          // numberLI.classList.add(`inputNumber`);
        
          // numberLI.innerText = userInput.value;
          // numberOutput.append(numberLI);


      


        } else {

          //go to odd pile
          const numberOddOutput = document.querySelector(`#odds-output`);

          const numberOddLI = document.createElement(`li`)
          numberOddLI.classList.add(`oddNumber`);
        
          numberOddLI.innerText = toSortOne;
          numberOddOutput.append(numberOddLI);

        }

        console.log(`before sort: ${inputNumberArray}`);

        for (let i = 0; i < inputNumberArray.length; i++) {

          // if( (i + 1) >= inputNumberArray.length) {
          //   inputNumberArray.pop();
          // } else {
          //   inputNumberArray[i] = inputNumberArray[i + 1];
          // }
          inputNumberArray[i] = inputNumberArray[i + 1];

          console.log(`after sort: ${inputNumberArray}`);
          

        }

      } else {
        //sort all

        //to reset the array:
        // inputNumberArray = [];

      }

    }

    })


});