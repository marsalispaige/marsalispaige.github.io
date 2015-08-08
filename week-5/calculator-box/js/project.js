var output = 0;
var add10 = 10;
var add20 = 20;
var add30 = 30;
var sub10 = -10;
var sub20 = -20;
var sub30 = -30;
var cal;


document.getElementById("a10").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num + 10;
		document.getElementById("out").innerHTML= output;


};

document.getElementById("a20").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num + 20;
		document.getElementById("out").innerHTML= output;


};

document.getElementById("a30").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num + 30;
		document.getElementById("out").innerHTML= output;


};


document.getElementById("n10").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num - 10;
		document.getElementById("out").innerHTML= output;


};

document.getElementById("n20").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num - 20;
		document.getElementById("out").innerHTML= output;


};

document.getElementById("n30").onclick = function(){
		var num = Number(document.getElementById("out").innerHTML);

		output = num - 30;
		document.getElementById("out").innerHTML= output;


};

document.getElementById("red").onclick = function(){

document.getElementById("out").style.backgroundColor = "red";


};


document.getElementById("blue").onclick = function(){
		
		document.getElementById("out").style.backgroundColor = "blue";


};

/*
$(".add").click(function(){
	if ($(this).attr("a10")) {

		output = 10 + output;
		$("#out").html(output);


	}

	else if ($(this).attr("a20")) {
		output = add20 + output;
		$("#out").html(output);

	}

	else {
		output = add30 + output;
		$("#out").html(output);

	}

});*/




