const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('mouseover', function () {
  menu.style.display = 'flex';
});

menuButton.addEventListener('mouseout', function () {
  if (!menu.contains(document.activeElement)) {
    menu.style.display = 'none';
  }
});

menu.addEventListener('mouseover', function () {
  menu.style.display = 'flex';
});

menu.addEventListener('mouseout', function () {
  if (!menu.contains(document.activeElement)) {
    menu.style.display = 'none';
  }
});

const sideMenuButton = document.getElementById('sideMenuButton');
const sideMenu = document.getElementById('sideMenu');

let isSideMenuOpen = false;

sideMenuButton.addEventListener('click', function () {
  if (isSideMenuOpen) {
    sideMenu.style.left = '-200px';
    sideMenuButton.innerHTML = '>>';
  } else {
    sideMenu.style.left = '0';
    sideMenuButton.innerHTML = '<<';
  }
  isSideMenuOpen = !isSideMenuOpen;
});
