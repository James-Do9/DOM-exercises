window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.querySelector("#mySelect");
	for (var i = 0; i < countries.length; i++) {
		let option = countries[i];
		let element = document.createElement("option");
		element.innerHTML = option;
		select.appendChild(element);
	}
};
