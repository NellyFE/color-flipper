//ordinary colors

const ordinaryColorButton = document.querySelector('#colorbutton');
const colorNameDisplay = document.querySelector('#colorname');

function getRandomColorName() {
  const colorNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
  const randomColor = colorNames [Math.floor(Math.random() * colorNames.length)];


  document.body.style.backgroundColor = randomColor;

  colorNameDisplay.innerHTML = `Current color is ${randomColor}`;

  console.log(randomColor);

}


ordinaryColorButton.addEventListener('click', () =>document.body.style.backgroundColor = getRandomColorName());
    






// //HEX colors

//  const hexColorButton = document.querySelector('#hex-button');

// function getRandomHexColor () {

// }





















