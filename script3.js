const hexColorButton = document.querySelector('#hexbutton');

const colorNameDisplay = document.querySelector('#hexcolor')

function getRandomHexColor (){
    const hex = Math.floor(Math.random() * 16777215).toString(16); 
    const hexColor = `#${hex.padStart(6, '0')}`;


document.body.style.backgroundColor = hexColor;

colorNameDisplay.innerHTML = `Current color is ${hexColor}`;

console.log(hexColor);
}

hexColorButton.addEventListener ('click' , () => document.body.style.background = getRandomHexColor())
