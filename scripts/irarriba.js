$(document).ready(function(){
 
	$('#btnarriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#btnarriba').slideDown(300);
		} else {
			$('#btnarriba').slideUp(300);
		}
	});
 
});
$(document).on("scroll", function() {

		if($(document).scrollTop()>100) {
		    $(".navbar").css("transition", "1.3s");
			$(".navbar").css("height","50px");
			$(".navbar").css("padding","5px");
		} else {
			$(".navbar").css("height","80px");
			$(".navbar").css("padding","15px");
			
		}

	});