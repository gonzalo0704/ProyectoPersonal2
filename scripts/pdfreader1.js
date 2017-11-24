$(document).ready(function(e){
	$("#pdfseba").click(function(){
		$("#overlay1").css("display","block");
		$("body").css("overflow","hidden");
		return false;
	});
	$("#overlay1").click(function(e){
		$("body").css("overflow","scroll");
		$("#overlay1").fadeOut("slow");
		return false;
	});
});
$(document).ready(function(e){
	$("#pdfcoito").click(function(){
		$("#overlay2").css("display","block");
		$("body").css("overflow","hidden");
		return false;
	});
	$("#overlay2").click(function(e){
		$("body").css("overflow","scroll");
		$("#overlay2").fadeOut("slow");
		return false;
	});
});