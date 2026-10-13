// ==========================
// MENU MOBILE
// ==========================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");


if(menu && nav){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}


// ==========================
// NAVBAR SCROLL
// ==========================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(header){

if(window.scrollY > 80){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}

}

});



// ==========================
// HERO SLIDER
// ==========================


const slides = document.querySelectorAll(".slide");


let currentSlide = 0;



if(slides.length > 0){


function changeSlide(){


slides[currentSlide].classList.remove("active");


currentSlide++;


if(currentSlide >= slides.length){

currentSlide = 0;

}


slides[currentSlide].classList.add("active");


}



setInterval(changeSlide,5000);


}



// ==========================
// ANIMATION STATISTIQUES
// ==========================


const counters = document.querySelectorAll(".stat h3");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target=+counter.dataset.target;

const current=+counter.innerText;


const increment=target/100;



if(current < target){


counter.innerText=Math.ceil(current + increment);


setTimeout(updateCounter,20);


}else{


counter.innerText=target;


}


}



updateCounter();


});




// ==========================
// LIGHTBOX GALLERY
// ==========================


const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox img");

const closeLightbox = document.querySelector(".close-lightbox");



if(lightbox && lightboxImage && closeLightbox){


galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


lightbox.classList.add("active");


lightboxImage.src=image.src;


});


});



closeLightbox.addEventListener("click",()=>{


lightbox.classList.remove("active");


});



lightbox.addEventListener("click",(e)=>{


if(e.target !== lightboxImage){

lightbox.classList.remove("active");

}


});


}





// ==========================
// TESTIMONIAL CAROUSEL
// ==========================


const testimonials = document.querySelectorAll(".testimonial");

const nextBtn = document.querySelector(".testimonial-next");

const prevBtn = document.querySelector(".testimonial-prev");


let testimonialIndex = 0;



function showTestimonial(index){


testimonials.forEach(item=>{

item.classList.remove("active");

});


testimonials[index].classList.add("active");


}



if(testimonials.length > 0 && nextBtn && prevBtn){


nextBtn.addEventListener("click",()=>{


testimonialIndex++;


if(testimonialIndex >= testimonials.length){

testimonialIndex=0;

}


showTestimonial(testimonialIndex);


});





prevBtn.addEventListener("click",()=>{


testimonialIndex--;


if(testimonialIndex < 0){

testimonialIndex=testimonials.length-1;

}


showTestimonial(testimonialIndex);


});





setInterval(()=>{


testimonialIndex++;


if(testimonialIndex >= testimonials.length){

testimonialIndex=0;

}


showTestimonial(testimonialIndex);



},5000);


}





// ==========================
// BACK TO TOP
// ==========================


const backTop = document.querySelector("#backTop");



if(backTop){


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


backTop.classList.add("show");


}else{


backTop.classList.remove("show");


}


});





backTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}





// ==========================
// SCROLL REVEAL ANIMATION
// ==========================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{


threshold:.15


});



sections.forEach(section=>{


section.classList.add("hidden");


observer.observe(section);


});