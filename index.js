function fermer_publicite() {
	var block_publicite = document.getElementById("publicite");
	block_publicite.style.display = "none";
}

function mettre_favori() {
	var icone_coeur = document.querySelector(".film_titre_icone .material-icons");

	if (icone_coeur.textContent === "favorite") {
		icone_coeur.textContent = "favorite_outline";
		icone_coeur.style.color = "black";
	} else {
		icone_coeur.textContent = "favorite";
		icone_coeur.style.color = "red";
	}
}
