console.log("converter.js");
function toCelsius () {
	console.log("Picked Celsius")
	let numToConvert = document.getElementById("inp-num").value
	let convertedCNum = ((numToConvert - 32) * 5) /9;
	let replaceText = document.getElementById("printTemp")
	if (convertedCNum > 32) {
		replaceText.innerHTML = (convertedCNum + "°C").fontcolor("red");
	}	else if (convertedCNum < 0) {
		replaceText.innerHTML = (convertedCNum + "°C").fontcolor("blue");
	}	else {
		replaceText.innerHTML = (convertedCNum + "°C").fontcolor("green");
	}
	//console.log(convertedCNum);
	
	
};

function toFahrenheit () {
	console.log("Picked Fahrenheit")
	let numToConvert = document.getElementById("inp-num").value;
	let convertedFNum = ((numToConvert *9) /5) +32;
	let replaceText = document.getElementById("printTemp")
	if (convertedFNum > 90) {
		replaceText.innerHTML = (convertedFNum + "°F").fontcolor("red");
	}	else if (convertedFNum < 32) {
		replaceText.innerHTML = (convertedFNum + "°F").fontcolor("blue");
	}	else {
		replaceText.innerHTML = (convertedFNum + "°F").fontcolor("green");
	}
};

// Get a reference to the button element in the DOM
let button = document.getElementById("btn-convert");
let resetButton = document.getElementById("btn-reset");
let formFull = document.getElementById("formSpace");
//let numToConvert = document.getElementById("inp-num").value;
// Get a reference to the input number element in the DOM
//var inputNumber = document.getElementById("inp-num");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  if (document.getElementById("rad-toFahrenheit").checked === true) {
  		toFahrenheit();
  		}
 	else if	(document.getElementById("rad-toFahrenheit").checked === false) {
		toCelsius();
			}
};
//Reset Button Function
function resetForm(clickEvent){
	console.log("event", clickEvent);
	formFull.reset();
//	document.getElementById("formSpace").reset();
}
// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);
button.addEventListener("click", determineConverter);

resetButton.addEventListener("click", resetForm);


function textInputNumber () {
	console.log(document.getElementById("inp-num").value);
}


