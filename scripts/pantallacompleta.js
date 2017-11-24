$(document).ready(function(){
$(".caroimg").click(function(){
		alert("funciona?");
		$(this).css("width","100%");
		$(this).css("position","fixed");
		$("body").css("overflow","hidden");
	});
});