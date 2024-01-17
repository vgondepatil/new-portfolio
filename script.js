function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let activeTitle = 'You have 6 items';
let inactiveTitle = 'Please come back';
document.title = activeTitle;
window.addEventListener('blur', e => {
    document.title = inactiveTitle;
});
window.addEventListener('focus', e => {
    document.title = activeTitle;
});
