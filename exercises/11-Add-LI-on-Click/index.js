let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let li = document.querySelector("#myList");
	let newLi = document.createElement("li");
	newLi.innerHTML = "Fourth element";
	li.appendChild(newLi);
});
