const ordinaryColorButton = document.querySelector('#colorbutton');

function getRandomColorName() {
  const colorNames = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'];
  const randomColor = colorNames [Math.floor(Math.random() * colorNames.length)];

  console.log(document.body.style.backgroundColor = randomColor);

}

ordinaryColorButton.addEventListener('click', () =>document.body.style.backgroundColor = getRandomColorName());
    

const rgbColorButton = document.querySelector('#rgbutton');

function getRandomRgbColor () {
const red =  Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

console.log(`rgb ${red}, ${green}, ${blue} `);
}
  





















//   //rgb button
//   const rgbButton = document.getElementById('rgb-button');
// if (rgbButton) {
//   rgbButton.addEventListener('click', function() {
//     document.body.style.backgroundColor = getRandomRgbColor();
//   });
// }

// function getRandomRgbColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }

