$(document).ready(function(){

//setting variables for url determinations

	var url = window.location.href;
	var currentUrl = url.substring(url.lastIndexOf("/")+1,url.lastIndexOf(".html"));

//Code to determine which page is currently active in order to execute top header animations
	if (currentUrl === "kylah" || currentUrl === "marsalis"||currentUrl === "kasia"||currentUrl === "babypaige") {
		
			$("#page-header-title, #menuBtn").animate({
				"top":"110%"
			}, 300);
			$("#"+currentUrl+"-color-box").animate({
				"top":"110%"
				},300)
				.css("border-radius","0")
				.animate({
				"width": "100%"
				},200,
				function(){
					$(".color-box:not('#"+currentUrl+"-color-box')").animate({
						"left": "-100%"
						},500,"easeInOutBack",
						function(){
							$("#"+currentUrl+"-color-box, #page-header-title, #menuBtn").animate({
								"top": "0%"
								},100);

						
							});
					});
				setTimeout(function(){$(".leader-img").slideToggle(700,"easeInOutCubic")},1000)
				

		}

	else { 
		$(".leader-img").slideToggle(700,"easeInOutCubic")
}


//controls toggle for menu slider
	//top header toggle
	$("#menuBtn").click(function(){

		$(this).toggleClass("fa-bars fa-chevron-down");
		$("nav").slideToggle(300)
	});
	//In nav toggle
	$("#menuUp").click(function(){
		$("#menuBtn").toggleClass("fa-bars fa-chevron-down");
		$("nav").slideToggle(300)
	});


	$(".thumb").click(function(){
		$("#big-image").hide();
		$("#big-image").attr("src", $(this).attr("src"));
		$("#big-image").fadeIn(400);
	});

	$("#play-movie").click(function(){

		$(this).toggleClass("fa-play-circle fa-chevron-circle-up");
		$("#video-embed").slideToggle(300);
	});

	$(".fa-music").click(function(){

		$(this).toggleClass("fa-music fa-chevron-circle-up");
		$("#music-list").slideToggle(300);
	});



 


});

// $(window).unload(function(){

// 	$("nav a").click(function(){
// 		var nextUrl = $(this).html();

// 		if (nextUrl == "kylah"||"marsalis"||"kasia"||"babypaige") {
// 			$("#"+nextUrl+"-color-box").animate({
// 				"top":"110%"
// 				},200)
// 				.animate({
// 				"width": "100%"
// 				},100,
// 				function(){
// 					$(".color-box:not('#"+nextUrl+"-color-box')").animate({
// 						"left": "-100%"
// 						},600,"easeInOutBack",
// 						function(){
// 							$("#"+nextUrl+"-color-box").animate({
// 								"top": "0%"
// 								},100)
// 							})
// 					})

// 		}

// 		else{
// 			$("#gen-color-box").animate({
// 				"top":"110%"
// 				},200)
// 				.animate({
// 				"width": "100%"
// 				},100,
// 				function(){
// 					$(".color-box:not('#gen-color-box')").animate({
// 						"left": "-100%"
// 						},600,"easeInOutBack",
// 						function(){
// 							$("#gen-color-box").animate({
// 								"top": "0%"
// 								},100)
// 							})
// 					})
// 		}

// 	})

// });