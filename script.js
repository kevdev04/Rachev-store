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
const navTwo = document.querySelector("#nav-2");

// mobile hamburger menu
const whopperButton = document.querySelector("#whopper");
const menuEscape = document.querySelector("#whopper-x");
const menuList = document.querySelector("#menuList");

// mobile search section
const mobileSearchButton = document.querySelector("#search-button")
const mobileSearch = document.querySelector("#mobileSearch")

//cards container

const cc = document.querySelector('#cc');
const buttonRight = document.querySelector("#button-sr");
const buttonLeft = document.querySelector("#button-sl");



// EVENTS


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


//buttons product carousel
buttonRight.onclick = function () {
  cc.scrollLeft += 270;
};
buttonLeft.onclick = function () {
  cc.scrollLeft -= 270;
};



// menu
function showMenu() {


    menuList.classList.toggle('invisible');
    cartList.classList.add('invisible');

}

function quitMenu() {

  const menuOpened = !menuList.classList.contains('invisible');

  if (menuOpened) {
    menuList.classList.add('invisible');
  }
}


// cart

function showCart() {
    cartList.classList.toggle('invisible');
    menuList.classList.add('invisible');
    mobileSearch.classList.add('invisible');
    fixSearchBar();
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
    mobileSearch.classList.toggle('invisible');
    menuList.classList.add('invisible');
    cartList.classList.add('invisible');
    fixSearchBar();

    
}
function fixSearchBar(){
    const searchActive = !mobileSearch.classList.contains('invisible');
  
    if (searchActive) {
        main.classList.add("invisible");
    } else {
        main.classList.remove("invisible");
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


//carousel main function
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


// carousel automatic slide
setInterval(function(){
  plusSlides(1);
}, 5000);


//main product-cards

const productList = [];

productList.push({
  name: "Jordan 4 UNC",
  price: 399,
  image: './img/s1.jpg',
});
productList.push({
  name: "Jordan 4 infrared",
  price: 299,
  image: './img/s2.jpg',
});
productList.push({
  name: "new balance 550 wh-gr",
  price: 399,
  image: './img/s3.jpg',
});
productList.push({
  name: "Nike air uptempo",
  price: 249,
  image: './img/s4.jpg',
});
productList.push({
  name: "Nike dunk panda",
  price: 249,
  image: './img/s5.jpg',
});
productList.push({
  name: "Nike dunk playstation X Travis scott",
  price: 249,
  image: './img/s6.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const cardDefault = document.createElement('div');
    cardDefault.classList.add('card-default');
  
    const cardUp = document.createElement('div');
    cardUp.classList.add('card-up');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('img-product');
  
    cardUp.appendChild(productImg);
  
    const cardDown = document.createElement('div');
    cardDown.classList.add('card-down');
  
    const productPrice = document.createElement('a');
    productPrice.innerText = '$' + product.price
    productPrice.classList.add('card-price');

    const productName = document.createElement('a');
    productName.innerText = product.name;
    productName.classList.add('card-name');
  
    cardDown.appendChild(productName);
    cardDown.appendChild(productPrice);
  
    cardDefault.appendChild(cardUp);
    cardDefault.appendChild(cardDown);
  
    cc.appendChild(cardDefault);
  
  }
};

renderProducts(productList);