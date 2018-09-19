
let user = {
	"email": "",
	"password": "",
	"fName": "",
	"lName": ""
}


function createUser() {
	let email = document.getElementById("email");
	let password = document.getElementById("password");
	let fName = document.getElementById("fName");
	let lName = document.getElementById("lName");

	user.email = email;
	user.password = password;
	user.fName = fName;
	user.lName = lName;

	const Http = new XMLHttpRequest();
	Http.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("ptag").innerHTML = this.responseText;
			console.log(this.responseText);
		}
	};
	Http.open("POST", "https://angular-qven1y.stackblitz.io/createUser", true);
	Http.send(user);
}


window.onload = function () {
	var submitButton = document.getElementById("submitButton");

	submitButton.onclick("");
}
