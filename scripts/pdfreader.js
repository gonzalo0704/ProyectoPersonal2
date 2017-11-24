$(document).ready(function(e){
	$("#pdfrita").click(function(e){
		$("#overlay").css("display","block");
		$("body").css("overflow","hidden");
		return false;
	});
	
	$("#overlay").click(function(e){
		
		$("body").css("overflow","scroll");
		$("#overlay").fadeOut("slow");
		
		return false;
	});
	
});
