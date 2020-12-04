let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let newDiv = document.createElement("div");
	newDiv.style.background = "yellow";
	newDiv.innerHTML = "Hello World";
	document.body.appendChild(newDiv);
});

//document.body.innerHTML = "<div style = 'background-color:yellow;'>Hello World</div>";
//Line 11 works but does not fulfill the test requirements
