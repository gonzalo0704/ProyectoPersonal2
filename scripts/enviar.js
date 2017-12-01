$(document).ready(function(){
	$("#btnenviar").click(function(){
	if ($("#name").val() == ""){
		$("#name").css("backgroundColor", "#ffcccc");
		$("#name").css("border-color", "#ff3333");
		$("#name").css("border-width", "3px");
	}
	if ($("#email").val() == ""){
		$("#email").css("backgroundColor", "#ffcccc");
		$("#email").css("border-color", "#ff3333");
		$("#email").css("border-width", "3px");
	}
	if ($("#name").val() != "" && $("#email").val() != "" && $("#comments").val() !="")

		
		email.value = "";
		comments.value = "";
		name.value = "";
	});
	$("#name").keyup(function(){
	if ($("#name").val() != ""){
		$("#name").css("border-color", "transparent");
		$("#name").css("backgroundColor", "white");
	}
	});
	$("#email").keyup(function(){
	if ($("#email").val() != ""){
		$("#email").css("border-color", "transparent");
		$("#email").css("backgroundColor", "white");
	}
	});
	if ($("#name").val() != "" && $("#email").val() != "" && $("#comments").val() !="")
		alert("Mensaje enviado con exito! Gracias por contactarte conmigo");
});