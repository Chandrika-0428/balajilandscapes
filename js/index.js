window.addEventListener("scroll",()=>{

const navbar=
document.querySelector(".navbar");

navbar.classList.toggle(
"scrolled",
window.scrollY > 50
);

});



ScrollReveal().reveal(

'.service-card',

{
distance:'50px',
duration:1200,
origin:'bottom',
interval:200
}

);

ScrollReveal().reveal(

'.about-left',

{
origin:'left',
distance:'60px'
}

);

ScrollReveal().reveal(

'.about-right',

{
origin:'right',
distance:'60px'
}

);

