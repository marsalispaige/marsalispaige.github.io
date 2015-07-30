var fahrenheitInput;
var celisusInput;

document.getElementById("submit1").onclick = fahrenheitConverter;

function fahrenheitConverter() {

	fahrenheitInput = document.getElementById("fahrenheitInput").value;
	var fahrenheitConversion = (fahrenheitInput-32)/1.8000;

	document.getElementById("fahrenheitConvert").innerHTML = fahrenheitInput + "&deg; F is " + fahrenheitConversion + "&deg; C.";

	if (fahrenheitInput > 75) 

		{document.getElementById("convertBox1").style.backgroundColor = "#fc6058"}

		else	{document.getElementById("convertBox1").style.backgroundColor = "#3569CF"};

}


document.getElementById("submit2").onclick = celisusConverter;

function celisusConverter() {

	celisusInput = document.getElementById("celisusInput").value;
	var celisusConversion = (celisusInput*1.8000)+32;

	document.getElementById("celisusConvert").innerHTML = celisusInput + "&deg; C is " + celisusConversion + "&deg; F.";

	if (celisusConversion > 75) {document.getElementById("convertBox2").style.backgroundColor = "#fc6058"} else	{document.getElementById("convertBox2").style.backgroundColor = "#3569CF"};

}