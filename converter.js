console.log("converter.js");

let tempNumber = [];
let convertNumber =  "Test";
//F TO C: FAHRENHEIT TO CELSIUS CONVERSION FORMULA
//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
//Example: (50°F - 32) x .5556 = 10°C

//C TO F: CELSIUS TO FAHRENHEIT CONVERSION FORMULA
//To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
//Example: 30°C x 1.8 + 32 = 86°F

function toCelsius () {
	mathedCelNumber = (tempNumber - 32) * .5556
}

function toFahrenheit () {
	mathedFahNumber = ((tempNumber * 1.8) + 32);
}

// Get a reference to the button element in the DOM
//var button = document.getElementById("btn-converter");

// This function should determine which conversion should
// happen based on which radio button is selected.


// Convert Button
document.getElementById("btn-converter").addEventListener("click", determineConverter);
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// ****** WORKING ******  Reset Button
document.getElementById("btn-reset").addEventListener("click", clearForm);

function clearForm() {
	document.getElementById("tempForm").reset();
}
function doMathStuff(){
	if(document.getElementById("selectC") = true;){
		console.log("");
	}
}

// ****** WORKING ****** Print convertNumber to HTML
document.getElementById("tempAnswer").innerHTML = convertNumber;

