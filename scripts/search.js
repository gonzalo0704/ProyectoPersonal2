var buscador = $("#table").DataTable();

$("#input-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#input-search").val() == ""){
        $(".content-search").fadeOut(300);
    }else{
        $(".content-search").fadeIn(300);
    }
});

$(".search-row").click(function(event){
	var option = $(this).attr("id");
	$(".content-row").fadeOut(300);
	var title, desc;
	switch(option)
	{
		case 'html': title = html_title;
					 desc = html_desc;
					  break;
		case 'css': title = css_title;
					 desc = css_desc;
					  break;
		case 'cmpt': title = cmpt_title;
					 desc = cmpt_desc;
					  break;
		case 'js': title = js_title;
					 desc = js_desc;
					  break;
		case 'jquery': title = jquery_title;
					 desc = jquery_desc;
					  break;
		case 'json': title = json_title;
					 desc = json_desc;
					  break;
		case 'vocation': title = vocation_title;
					 desc = vocation_desc;
					  break;
		case 'webdeveloper': title = webdeveloper_title;
					 desc = webdeveloper_desc;
					  break;			  
	}
	
	$("#definition-title").html(title);
    $("#definition-desc").html(desc);

	
});

function irA(elemID) {
	var offsetTrail = document.getElementById(elemID);
	var offsetLeft = 0;
	var offsetTop = 0;
	while (offsetTrail) {
	offsetLeft += offsetTrail.offsetLeft;
	offsetTop += offsetTrail.offsetTop;
	offsetTrail = offsetTrail.offsetParent;
}
if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined" && navigator.appName=="Microsoft Internet Explorer" ) {
	offsetLeft += parseInt(document.body.leftMargin);
	offsetTop += parseInt(document.body.topMargin);
}
window.scrollTo(offsetLeft,offsetTop)
};