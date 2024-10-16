//RGB color
const rgbColorButton = document.querySelector('#rgbutton');
const colorNameDisplay = document.querySelector('#rgbcolor')

function getRandomRgbColor () {
const red =  Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const rgbColor = `rgb(${red}, ${green}, ${blue})`;

colorNameDisplay.innerHTML = `Current color is ${rgbColor}`;

console.log(rgbColor);

return rgbColor;

}

rgbColorButton.addEventListener('click', () => document.body.style.backgroundColor = getRandomRgbColor());
  
