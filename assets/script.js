//Déclaration des variables globales

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerSlides = document.querySelector(".banner-img");
const bannerText = document.querySelector("p");


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des écouteurs d'événements
left.addEventListener("click", showPreviousSlide);
right.addEventListener("click", showNextSlide);

let currentSlide = 0;
updateActiveDot();

function updateActiveDot () {
    dots.forEach ((dot, index) => {
        dot.classList.remove("dot_selected");
        if (index === currentSlide) {
            dot.classList.add ("dot_selected");
        }
    })
}



// Définition des fonctions


function showNextSlide() {
    console.log("Clic sur la flèche droite"); 
    currentSlide = (currentSlide + 1) % slides.length;
    bannerSlides.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	console.log
    bannerText.innerHTML = slides[currentSlide].tagLine;
    updateActiveDot();
}

function showPreviousSlide () {
    console.log("Clic sur la flèche gauche"); 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    bannerSlides.src = "./assets/images/slideshow/" + slides[currentSlide].image;
	console.log
    bannerText.innerHTML = slides[currentSlide].tagLine;
    updateActiveDot();
} 