$(document).ready(function(){
	$("#mobile").click(function(){
		$("#page-header nav").toggle();
	});

	

	$(window).resize(function(){
	 if($(window).width() > 768) {
	 	$("#page-header nav").show();
	 }
	 else {
	 	$("#page-header nav").hide();		
	 }
	 	if($(window).width() > 768) {
	 		$("#page-header nav").attr("style", "");
	 	}
 	});
});