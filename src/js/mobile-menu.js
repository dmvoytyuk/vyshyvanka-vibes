const menuCloseButton = document.getElementById('menu-close-button');
const menuOpenButton = document.getElementById('menu-open-button');
const menu = document.getElementById('mobile-menu-id');
const menuLink = document.getElementsByClassName('mobile-nav-links-item');

// show/hide the menu when the button is clicked
for (let link of menuLink) {
  // console.log(link);
  link.addEventListener('click', () => {
    console.log("clicked close button");
    menu.classList.remove('is-open');
  });
}

menuOpenButton.addEventListener('click', () => {
  console.log(menu);
  console.log('click open');
  menu.classList.add('is-open');
  console.log(menu);
});

menuCloseButton.addEventListener('click', () => {
  console.log(menu);
  console.log("clicked close button");
  menu.classList.remove('is-open');
  console.log(menu);
});

// hide the menu when a click event occurs outside the menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuOpenButton.contains(event.target)) {
    menu.classList.remove('is-open');
  }
});