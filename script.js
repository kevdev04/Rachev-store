//global declarations
const main = document.querySelector("#main");
// cart and account buttons
const cartButton = document.querySelector("#cart");
const cartEscape = document.querySelector("#cart-x");
const cartList = document.querySelector("#cartList");
const acc = document.querySelector("#acc");

// subnav section (like hover)
const navSub1 = document.querySelector("#sub-section1");
const navSub2 = document.querySelector("#sub-section2");
const navSub3 = document.querySelector("#sub-section3");
const navSub4 = document.querySelector("#sub-section4");

const navSubMenu = document.querySelector("#nav-sub");

// mobile hamburger menu
const whopperButton = document.querySelector("#whopper");
const menuEscape = document.querySelector("#whopper-x");
const menuList = document.querySelector("#menuList");

// mobile search section
const mobileSearchButton = document.querySelector("#search-button")
const mobileSearch = document.querySelector("#mobileSearch")


// hamburger 
whopperButton.addEventListener('click', showMenu);
menuEscape.addEventListener('click', quitMenu);
cartButton.addEventListener('click', showCart);
cartEscape.addEventListener('click', quitCart);
acc.addEventListener('click', showCart);

//nav subMenu
navSub1.addEventListener('mouseover', showSubNav);
navSub2.addEventListener('mouseover', showSubNav);
navSub3.addEventListener('mouseover', showSubNav);
navSub4.addEventListener('mouseover', showSubNav);

navSubMenu.addEventListener('mouseout', quitSubNav);

mobileSearchButton.addEventListener('click', showMobileSearch);



// 
function showMenu() {

  const menuClosed = menuList.classList.contains('invisible');

  if (menuClosed) {
    menuList.classList.remove('invisible');
  }
}

function quitMenu() {

  const menuOpened = !menuList.classList.contains('invisible');

  if (menuOpened) {
    menuList.classList.add('invisible');
  }
}


// cart

function showCart() {

  const cartClosed = cartList.classList.contains('invisible');

  if (cartClosed) {
    cartList.classList.remove('invisible');
  }
}
function quitCart() {

  const cartOpened = !cartList.classList.contains('invisible');

  if (cartOpened) {
    cartList.classList.add('invisible');
  }
}

// nav
function showSubNav() {
  const categoryHover = navSubMenu.classList.contains('invisible');

  if (categoryHover) {
    navSubMenu.classList.remove('invisible');
  }
}
function quitSubNav() {
  const quitMouse = !navSubMenu.classList.contains('invisible');

  if (quitMouse) {
    navSubMenu.classList.add('invisible');
  }
}


// searchbar mobile version
function showMobileSearch() {
  const showMS = mobileSearch.classList.contains('invisible');

  if (showMS) {
    mobileSearch.classList.remove('invisible');
    main.classList.add("invisible")
    
  }
}



// slideshow ------------------------------------------------->

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}