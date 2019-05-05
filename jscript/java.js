

// func för att dölja / visa 
function myJsFunc(variable) {
	const x = document.getElementsByClassName('tipsbody');
	for (var i = 0; i < x.length; i++) {
		if (x[i].classList.contains(variable)) {
			x[i].style.display = "grid";
		} else if (variable == "showall") { 
			x[i].style.display = "grid";
		} else {
			x[i].style.display = "none";
		}
	}
}