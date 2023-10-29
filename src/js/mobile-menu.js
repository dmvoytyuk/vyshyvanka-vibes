function openMenu() {
  console.log("clicked");
  var menu = document.getElementById("mobile-menu-id");
  menu.classList.add("is-open");  
}

function closeMenu() {
  console.log("clicked close button");
  var menu = document.getElementById("mobile-menu-id");
  menu.classList.remove("is-open");
}
