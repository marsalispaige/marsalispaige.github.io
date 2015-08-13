$(document).ready(function(){

		$("#sun").click(function(){
			$("#moon").css({"left":"100%","top":"50%"});
			$("#cow").css({"left":"-15%","top":"62%"});
			$("#night").css("z-index","10");
			$("#party").remove();
			$("#sun").animate({
					"left": "-30%",
					"top": "50%"
					},5000);
			$("#night").animate({
					"opacity": ".60",
					},6000);
			$("#moon").animate({
					"top": "15%",
					"left": "45%",
					},5000);
			$("#human").animate({
					"top": "63%",
					"width": "2%"
					},8000);
			$("#rooster").animate({
					"top": "63%",
					"width": "2%",
					"left": "94%"
					},8000);
			$("#lamb").animate({
					"top": "64%",
					"width": "2%",
					"left": "70%"
					},8000);

		});


	$("#moon").click(function(){
		$("#sun").css({"left":"100%","top":"65%"});
		$("#cow").animate({
			"left": "20%"
		},800)
		.animate({
			"top": "3%",
			"left": "50%"
		},1500)
		.animate({
			"left": "80%",
			"top": "62%"
		},1500)
		.animate({
			"left": "105%"
		},800,function(){
				$("#moon").animate({
					"left": "-30%",
					"top": "50%"
					},5000);
				$("#night").animate({
					"opacity": ".00",
					"z-index": "1"
					},6000);
				$("#sun").animate({
					"top": "10%",
					"left": "47%",
					"margin-left": "-65px"
					},5000);
				$("#human").animate({
					"top": "68%",
					"width": "159px"
					},8000)
					.animate({
					"left":"70%",
					},2000)
					.animate({
					"left":"30%"
					},2000);
				$("#rooster").animate({
					"top": "68%",
					"width": "159px",
					"left": "80%"
					},8000);
				$("#lamb").animate({
					"top": "68%",
					"width": "100px",
					"left": "65%"
					},8000);
				$("#cow2").css("z-index","11").animate({
					"left":"-20%",
				},7000);
				$("body").append("<h1 id='party'>Farm Party</h1>")
				.animate({"letter-spacing":"10px"},1000);

			});
		
		});


	});
