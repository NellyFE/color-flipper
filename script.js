//ordinary colors

const ordinaryColorButton = document.querySelector('#colorbutton');

function getRandomColorName() {
  const colorNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
  const randomColor = colorNames [Math.floor(Math.random() * colorNames.length)];

  console.log(document.body.style.backgroundColor = randomColor);

}

ordinaryColorButton.addEventListener('click', () =>document.body.style.backgroundColor = getRandomColorName());
    


//RGB color
const rgbColorButton = document.querySelector('#rgbutton');

function getRandomRgbColor () {
const red =  Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const rgbColor = `rgb(${red}, ${green}, ${blue})`;

console.log(rgbColor);

return rgbColor;

}

rgbColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomRgbColor();
});  



//HEX colors

const hexColorButton = document.querySelector('#hex-button');

function getRandomHexColor () {

}





















