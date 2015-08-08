$(document).ready(function(){
	var total = 0;

	//Do this for a10, a20, a30, n10, n20, n30
	$("#a10, #a20, #a30, #n10, #n20, #n30, #red, #blue, #out").click(function(){
		//add 10 to the total


if ($(this).attr("id") == "a10") {

	total = 10 + total;
	$("#out").html(total)
}
	

else if ($(this).attr("id") == "a20") {

	total = 20 + total;
	$("#out").html(total)
	}

else if ($(this).attr("id") == "a30") {

	total = 30 + total;
	$("#out").html(total)
	}

else if ($(this).attr("id") == "n10") {

	total = -10 + total;
	$("#out").html(total)
	}


else if ($(this).attr("id") == "n20") {

	total = -20 + total;
	$("#out").html(total)
	}

else if ($(this).attr("id") == "n30") {

	total = -30 + total;
	$("#out").html(total)
	}


else if ($(this).attr("id") == "red") {

	$("#out").css("background-color", "red")
	}

else if ($(this).attr("id") == "blue") {

	$("#out").css("background-color", "blue")
	}


else	{
	$("#out").css("background-color", "white")
}

});
		

		
});