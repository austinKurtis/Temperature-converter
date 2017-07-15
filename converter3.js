function toCelsius () {
	var selFahr = document.getElementById().value;
	var celsCalc = (selFahr - 32) * .5556;
	if (celsCalc > 32) {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("red");
	} else if (celsCalc < 0) {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("blue");
	}
	else {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("green");
	}
}

function toFahrenheit () {
	let selCalc = document.getElementById().value;
	let fahrCalc = (selCalc * 1.8) + 32;
;	if (fahrCalc > 90) {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("red");
	} else if (fahrCalc < 32) {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("blue");
	}
	else {
		getElementById("tempAnswer").innerHTML = (celsCalc + "°C").fontcolor("green");
	}
}

let convertButton = document.getElementById("btn-converter").addEventListener("click", determineConverter);

function determineConverter (clickEvent) {
	let celcSelect = document.getElementById("selectC");
	let fahrSelect = document.getElementById("selectF");

	if(celcSelect.checked === true) {
		toCelsius();
	} else if (fahrSelect.checked === true) {
		toFahrenheit();
	}
}

// ****** WORKING ******  Reset Button
let resetButton = document.getElementById("btn-reset").addEventListener("click", clearForm);
function clearForm() {
	document.getElementById("tempForm").reset();
}