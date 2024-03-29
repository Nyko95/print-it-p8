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


// Sélectionner les flèches gauche et droite
let arrowLeft = document.getElementById('arrow_left'); // Sélectionne la flèche gauche
let arrowRight = document.getElementById('arrow_right'); // Sélectionne la flèche droite

// Ajouter des écouteurs d'événements sur les flèches gauche et droite
arrowLeft.addEventListener('click', function() {
    // Logique pour naviguer vers la gauche dans le carrousel
    console.log('Clic sur la flèche gauche'); // Affiche un message dans la console indiquant que la flèche gauche a été cliquée
    alert('Clic sur la flèche gauche'); // Affiche une alerte indiquant que la flèche gauche a été cliquée
});

arrowRight.addEventListener('click', function() {
    // Logique pour naviguer vers la droite dans le carrousel
    console.log('Clic sur la flèche droite'); // Affiche un message dans la console indiquant que la flèche droite a été cliquée
    alert('Clic sur la flèche droite'); // Affiche une alerte indiquant que la flèche droite a été cliquée
});