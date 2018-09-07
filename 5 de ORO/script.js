$(document).ready(function(){
	$('#mainbtn1').click(function() {
  numeroAleatorio1(1, 48);
   $('#numero-aleatorio1').css("display","block");
});
	$('#mainbtn2').click(function() {
  numeroAleatorio2(1, 48);
   $('#numero-aleatorio2').css("display","block");
});
	$('#mainbtn3').click(function() {
  numeroAleatorio3(1, 48);
   $('#numero-aleatorio3').css("display","block");
});
	$('#mainbtn4').click(function() {
  numeroAleatorio4(1, 48);
   $('#numero-aleatorio4').css("display","block");
});
	$('#mainbtn5').click(function() {
  numeroAleatorio5(1, 48);
   $('#numero-aleatorio5').css("display","block");
});

numeroAleatorio(1, 48);

function numeroAleatorio1(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  $('#numero-aleatorio1').html('<img src=" images/'+ num +'.png" >');

}
function numeroAleatorio2(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  $('#numero-aleatorio2').html('<img src=" images/'+ num +'.png" >');
  
}
function numeroAleatorio3(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  $('#numero-aleatorio3').html('<img src=" images/'+ num +'.png" >');
  
}
function numeroAleatorio4(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  $('#numero-aleatorio4').html('<img src=" images/'+ num +'.png" >');
  
}
function numeroAleatorio5(min, max) {
  var num = Math.round(Math.random() * (max - min) + min);
  $('#numero-aleatorio5').html('<img src=" images/'+ num +'.png" >');
  
}
});