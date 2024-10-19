console.log(`test`);

//43 minutes in, Remove Button

const addNumberButton = document.querySelector(`#number-button`);
addNumberButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  console.log(`Clicked`);
  const userInput = document.querySelector(`input`);
  console.log(userInput);
  console.log(userInput.value);

  const numberOutput = document.querySelector(`#number-bank-output`);

  const numberLI = document.createElement(`li`)

  numberLI.innerText = userInput.value;

  numberOutput.append(numberLI);

  const sortButtons = document.querySelector(`#numberBank`); // or #sortedButtons

  sortButtons.addEventListener(`click`, (event) => {
    console.log(event);
    if(event.target.tagName === `BUTTON`) {
      console.log(`A button was clicked`);

    }

    })





});