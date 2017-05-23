$("#btn").click(function(){
  var texto=$("#li-texto").val();
  informacion(texto);
});

function informacion(cadena) {
	var resultado = cadena
	var textMin=resultado.toLowerCase();
	var texMay=resultado.toUpperCase();

	if(cadena==textMin){
		alert("La cadena esta formado por minúsculas")
	}else if(cadena==texMay){
		alert("La cadena esta formado por mayÚsculas");
	}else{
		alert("Esta formada por ambos");
	}
}
 
