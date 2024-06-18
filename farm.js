let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}
//for swiper: 

var swiper = new Swiper(".product-row", {
  // giving the spaces between the the contents or each swipers as 30
    spaceBetween: 30,
    loop:true,
    // for the content to be in the centered mode :
    centeredSlides:true,
    autoplay:{
        delay:9500,
        // the autoplay will not be disabled when we swipe:
        disableOnInteraction:false,
    },
    // pagination (for bullets)
    pagination: {
      // class name of pagination is called using el:
      el: ".swiper-pagination",   
      // for clicking accessibility we have used :
      clickable: true,
    },
    breakpoints: {
      0: {
        // to have 2 slides when the width is 0
        slidesPerView: 1,   
      },
      // to have 3 slidees(0,1,2) when we have the width of the screen as 768 px
      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".aboutUs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // footer: 
  // for copyrights updation of the year 
  
  const yearSpan=document.querySelector('#currentYear');
  const currentYear=new Date();
  yearSpan.innerHTML=currentYear.getFullYear();
  
  function stickyMenu(){
    var sticky=document.getElementById('sticky');
    if(window.pageYOffset > 220){
        sticky.classList.add('sticky');
    }
    else{
        sticky.classList.remove('sticky')
    }
}
wwindow.onscroll=function(){
    stickyMenu();
}


// products

 // Define the base price per unit and weight for each quantity option
const price = {
  "250g": 10, // Price per gram for 250 grams
  "500g": 18, // Price per gram for 500 grams
  "1kg": 30 // Price per gram for 1 kg
};

// Get references to the quantity drop-down menu and price field
const quantityDropdown = document.getElementById("quantity-dropdown");
const priceField = document.getElementById("price-field");

// Calculate the total price based on the selected quantity option
function calculatePrice() {
  const selectedQuantity = quantityDropdown.value;
  const pricePerUnit = prices[selectedQuantity];
  const totalPrice = pricePerUnit * selectedQuantity;
  return totalPrice;
}

// Update the displayed price when the quantity option changes
quantityDropdown.addEventListener("change", () => {
  const newPrice = calculatePrice();
  priceField.value = newPrice;
});

// Set the default price based on the smallest quantity option
const defaultPrice = calculatePrice();
priceField.value = defaultPrice;
 const prices = {
  "product1": {
    "250g": 10,
    "500g": 18,
    "1kg": 30
  },
  "product2": {
    "250g": 12,
    "500g": 22,
    "1kg": 38
  },
  // Add more products and their prices as needed
};