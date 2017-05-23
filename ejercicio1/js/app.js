$(document).ready(function(){
	mueveReloj();
	setTimeout(mueveReloj,1000);
});
function mueveReloj(){ 
 	var momentoActual = new Date() 
 	var hora = momentoActual.getHours() 
 	var minuto = momentoActual.getMinutes() 
 	var segundo = momentoActual.getSeconds() 

 	horaImprimible = hora + " : " + minuto + " : " + segundo 

 	$("input").val(horaImprimible);  
}
