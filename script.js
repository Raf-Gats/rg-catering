
console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    console.log("Menu class list:", menu.className);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const alertButton = document.getElementById('alertButton');

  alertButton.addEventListener('click', () => {
    alert('Hello! My name is Wilnard, how are you today.');
  });
});
    const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

let counter = 0;

incrementButton.addEventListener('click', function () {
counter += 1; 
counterDisplay.textContent = counter; 

decrementButton.addEventListener('click', function () {
counter -= 1;
counterDisplay.textContent = counter;
  });
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
    location.reload();
});

const userInput = document.getElementById('username')
const greetButton = document.getElementById('greetButton')
const greetingMessage = document.getElementById('greetingMessage')

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; 
    return namePattern.test(name);
}
greetButton.addEventListener('click', function () {
 
 const username = userInput.value.trim();

 if (username === '') {
    greetingMessage.textContent = ('Please enter your name.');
} else if (!isValidName(username)) {
    greetingMessage.textContent = 'Invalid input. Please use only letters.';
} else {
  
   greetingMessage.textContent = `Hello, ${username}!`;
}
 });

 const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {
const newParagraph = document.createElement('p');

newParagraph.textContent = 'Hello, Wilnard Racel!';

paragraphContainer.appendChild(newParagraph);
});
 