mobileMenu.onclick = function myFunction() {
	var x = document.getElementById('menu');

	if (x.className === "main-nav") {
		x.className += "responsive";
	} else {
		x.className = "main-nav";
	}
}