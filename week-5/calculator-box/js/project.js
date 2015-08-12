$(document).ready(function(){
	$(".math").click(function(){
		$("#white").html(parseInt($("#white").html())+parseInt($(this).html()))
	});
	$(".colorChange").click(function(){
		$("#white").css("background-color", $(this).attr("id"));
		if ($(this).attr("id") == "white") {
			$("#white").html(0);
		};
	});
});


/*	var total = 0;

	//Do this for a10, a20, a30, n10, n20, n30
	$("#a10, #a20, #a30, #n10, #n20, #n30, #red, #blue, #out").click(function(){
		//add 10 to the total

if ($(this).attr("class") == "math") {
total = total + parseInt($(this).html());
$("#out").html(total);
}

else if ($(this).attr("id") == "out") {
	total = 0;
	$("#out").html(total);
	$("#out").css("background-color", "white");

}

else	{$("#out").css("background-color", $(this).attr("id"));
};*/


/*if ($(this).attr("id") == "a10") {

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
	$("#out").css("background-color", "white");
	total=0;
	$("#out").html(total);

}*/

		

		
