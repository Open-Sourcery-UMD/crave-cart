// Background script for the browser extension will go here


const sidebar = document.getElementById('sidebar');
const menubtn = document.getElementById('menubtn');
const closemenu = document.getElementById('closemenu');

menubtn.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closemenu.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});