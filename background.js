// Background script for the browser extension will go here


const menu = document.getElementById('menu');
const openmenu = document.getElementById('openmenu');
const closemenu = document.getElementById('closemenu');
const addRecipe = document.getElementById('addRecipe');

openmenu.addEventListener('click', () => {
    menu.style.left = '0';
});

closemenu.addEventListener('click', () => {
    menu.style.left = '-250px';
});

addRecipe.addEventListener('click', () => {
    window.location.href = 'addRecipe.html';
});