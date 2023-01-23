//global declarations
const main = document.querySelector("#main");
// cart and account buttons
const cartButton = document.querySelector("#cart");
const cartEscape = document.querySelector("#cart-x");
const cartEscape2 = document.querySelector("#cart-x2");
const cartList = document.querySelector("#cartList");
const acc = document.querySelector("#acc");

// subnav section (like hover)
const navSub1 = document.querySelector("#sub-section1");
const navSub2 = document.querySelector("#sub-section2");
const navSub3 = document.querySelector("#sub-section3");
const navSub4 = document.querySelector("#sub-section4");
const navSubTopics = document.querySelector("nav-st");
const navSubSubtopics = document.querySelector("nav-sst");

const navSubMenu = document.querySelector("#nav-sub");
const nav1 = document.querySelector("#nav-1");
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
const cc2 = document.querySelector('#cc2');
const buttonRight = document.querySelector("#button-sr");
const buttonLeft = document.querySelector("#button-sl");
const buttonRight2 = document.querySelector("#button-sr2");
const buttonLeft2 = document.querySelector("#button-sl2");

// search section
const searchX = document.querySelector('#search-x');
searchX.addEventListener('click', quitSearch);
function quitSearch() {
  mobileSearch.classList.add('invisible');
  fixSearchBar();
}

//formulary newseller
const buttonNewseller = document.querySelector('#b-new');
buttonNewseller.addEventListener('click', submitEmail);
const emailAlert = document.querySelector('#email-alert');


function submitEmail() {
  emailAlert.innerText = 'Successful registration!'
}

// EVENTS



// hamburger 
whopperButton.addEventListener('click', showMenu);
menuEscape.addEventListener('click', quitMenu);
cartButton.addEventListener('click', showCart);
cartEscape.addEventListener('click', quitCart);
cartEscape2.addEventListener('click', quitCart2);
acc.addEventListener('click', showAcc);

//nav subMenu
navSub1.addEventListener('mouseover', showSubNav);
navSub2.addEventListener('mouseover', showSubNav);
navSub3.addEventListener('mouseover', showSubNav);
navSub4.addEventListener('mouseover', showSubNav);




main.addEventListener('mouseover', quitSubNav);
nav1.addEventListener('mouseover', quitSubNav);


mobileSearchButton.addEventListener('click', showMobileSearch);


//buttons product carousel
buttonRight.onclick = function () {
  cc.scrollLeft += 270;
};
buttonLeft.onclick = function () {
  cc.scrollLeft -= 270;
};
buttonRight2.onclick = function () {
  cc2.scrollLeft += 270;
};
buttonLeft2.onclick = function () {
  cc2.scrollLeft -= 270;
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
function showCart2() {
  cartList.classList.remove('invisible');
  menuList.classList.add('invisible');
  mobileSearch.classList.add('invisible');
  fixSearchBar();
}
function showAcc() {
  accList.classList.toggle('invisible');
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
function quitCart2() {

  const accOpened = !accList.classList.contains('invisible');

  if (accOpened) {
    accList.classList.add('invisible');
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



// carousel ------------------------------------------------->

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
}, 3500);


//main product-cards

const productList = [];


productList.push({
  name: "Jordan 4 University",
  price: 399,
  image: './img/s1.jpg',
  id: 1,
});
productList.push({
  name: "Jordan 4 infrared",
  price: 299,
  image: './img/s2.jpg',
  id: 2,
});
productList.push({
  name: "new balance 550 wh-gr",
  price: 399,
  image: './img/s3.jpg',
  id: 3,
});
productList.push({
  name: "Nike air uptempo",
  price: 249,
  image: './img/s4.jpg',
  id: 4,
});
productList.push({
  name: "Nike dunk panda",
  price: 249,
  image: './img/s5.jpg',
  id: 5,
});
productList.push({
  name: "Nike dunk playstation",
  price: 249,
  image: './img/s6.jpg',
  id: 6,
});

const productList2 = [];

productList2.push({
  name: "Jordan 4 University",
  price: 399,
  image: './img/s1.jpg',
  id: 1,
});
productList2.push({
  name: "Jordan 4 infrared",
  price: 299,
  image: './img/s2.jpg',
  id: 2,
});
productList2.push({
  name: "new balance 550 wh-gr",
  price: 399,
  image: './img/s3.jpg',
  id: 3,
});
productList2.push({
  name: "Nike air uptempo",
  price: 249,
  image: './img/s4.jpg',
  id: 4,
});
productList2.push({
  name: "Nike dunk panda",
  price: 249,
  image: './img/s5.jpg',
  id: 5,
});
productList2.push({
  name: "Nike dunk playstation",
  price: 249,
  image: './img/s6.jpg',
  id: 6,
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
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    productPrice.classList.add('card-price');

    const cardCartButton = document.createElement('a');
    cardCartButton.classList.add('card-cartbutton');
    cardCartButton.href = "#";
    cardCartButton.setAttribute('data-id' , product.id );
    


    const productName = document.createElement('p');
    productName.innerText = product.name;
    productName.classList.add('card-name');
  
    cardDown.appendChild(productName);
    cardDown.appendChild(productPrice);
    cardDown.appendChild(cardCartButton);
  
    cardDefault.appendChild(cardUp);
    cardDefault.appendChild(cardDown);
  
    cc.appendChild(cardDefault);
  
  }
};
function renderProducts2(arr) {
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
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    productPrice.classList.add('card-price');

    const cardCartButton = document.createElement('a');
    cardCartButton.classList.add('card-cartbutton');
    cardCartButton.href = "#";
    cardCartButton.setAttribute('data-id' , product.id );


    const productName = document.createElement('p');
    productName.innerText = product.name;
    productName.classList.add('card-name');
  
    cardDown.appendChild(productName);
    cardDown.appendChild(productPrice);
    cardDown.appendChild(cardCartButton);
  
    cardDefault.appendChild(cardUp);
    cardDefault.appendChild(cardDown);
  
    cc2.appendChild(cardDefault);
  
  }
};
renderProducts(productList);
renderProducts2(productList2);
renderProducts(productList);
renderProducts2(productList2);


// function add to cart ----------------------------------------->

let articulosCarrito = [];

const cartArticles = document.querySelector("#cart-a-container")
const newSection = document.querySelector("#new-section");
const sendCartButton = document.querySelector("#card-cartbutton");
const co = document.querySelector("#co");

newSection.addEventListener('click', addCart);
//show local storage products
document.addEventListener("DOMContentLoaded", () => {
  articulosCarrito = JSON.parse(localStorage.getItem('cart')) || [];

  cartHTML();
})

// delete cart articles
cartArticles.addEventListener('click', deleteArticle)
function deleteArticle(e) {
  if(e.target.classList.contains('cart-x-mini')) {
    const productId = e.target.getAttribute('data-id');
    
    //delete of the array by the data-id
    articulosCarrito = articulosCarrito.filter( product => product.id !== productId);
    cartHTML();
  }
}

//delete all the cart
const trashBtn = document.querySelector('#cart-trash');
trashBtn.addEventListener('click', () => {
  articulosCarrito = [];
  cleanHTML();
})



function addCart(e){
  e.preventDefault();

  if (e.target.classList.contains('card-cartbutton')) {
    const choisedProduct = e.target.parentElement.parentElement;
    readElements(choisedProduct);
    showCart2();
  }
}

function readElements(product){

  
  const productInfo = {
    imagen: product.querySelector('img').src,
    titulo: product.querySelector('.card-name').textContent,
    precio: product.querySelector('.card-price').textContent,
    id: product.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }
  

  //check if one element already exists
  const exist = articulosCarrito.some( product => product.id === productInfo.id);
  if (exist) {
    const products = articulosCarrito.map( product => {
      if (product.id === productInfo.id) {
        product.cantidad++
        return product;
      } else {
        return product;
      }
    } );
    articulosCarrito = [...products];  
  }else {
    //add the elements to array
    articulosCarrito = [...articulosCarrito, productInfo];
  }
  const totalPrice = document.querySelector('#total-price');
  const totalAmount = document.querySelector('#total-amount');
  totalPrice.innerText = productInfo.precio + productInfo.precio
  totalAmount.innerText = productInfo.cantidad
  console.log(productInfo.precio);
  console.log(productInfo.cantidad);

  cartHTML();

}

// show the products in the cart
function cartHTML() {

  //clean html 
  cleanHTML();


  // create html

  articulosCarrito.forEach( product => {
    const {imagen,titulo,precio,cantidad,id} = product;
    const row = document.createElement('div');
    

    row.classList.add('each-article');
    row.innerHTML = `
      <div>
        <img src="${imagen}" width="60">
        <p>${titulo}</p>
      </div>
      <p class="tp">${precio}</p>
      <p>${cantidad}</p>
      <div>
        <button class="cart-x-mini" data-id="${id}">X</button>
      </div>
    `;

    // add html to tbody
    cartArticles.appendChild(row);
    const eachArticle = document.querySelector('.each-article')
    
  })
  //cart local storage
  syncStorage();
}



function syncStorage() {
  localStorage.setItem('cart',JSON.stringify(articulosCarrito));
}

//delete products tbody
function cleanHTML() {
  while (cartArticles.firstChild) {
    cartArticles.removeChild(cartArticles.firstChild)
  }
  syncStorage();
}

