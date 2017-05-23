$(document).ready(function(){
	var modal_palidrome=(function(){

		var st={
			texto:"#texto",
			boton:"#btn"
		};

		var dom={}

		var catchDom=function(){
			dom.boton=$(st.boton);
			dom.texto=$(st.texto);
		}

		var suscribeEvents=function(){
			dom.boton.on("click",events.palindrome)
		};

		var events={
			palindrome:function(e){
				var cadena=dom.texto.val();
				var cadenaOriginal = cadena.toLowerCase(); // Pasar a minusculas la cadena
			  var letrasEspacios = cadenaOriginal.split(""); // Convertir la cadena en un array
			  var cadenaSinEspacios = ""; // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
			  
			  for(i in letrasEspacios) {
			    if(letrasEspacios[i] != " ") {
			      cadenaSinEspacios += letrasEspacios[i];
			    }
			  }
			  var longitud=cadenaSinEspacios.length;
			  var letras = cadenaSinEspacios.split("");
			  var letrasReves = cadenaSinEspacios.split("").reverse();
			  var count1 = 0;
			  
			  for(i in letras) {
			    if(letras[i] == letrasReves[i]) {
			      count1++// Todo bien
			    }
			    else {
			      count1=0;
			    }
			  }
			 
			  if(count1==longitud) {
			    alert("Es un palindromo");
			  }else if(count1<longitud) {
			    alert("No es un palindrome");
			  }
			}
		};

		var initialize=function(){
			catchDom();
			suscribeEvents();
		}
		return {
			init:initialize
		}
	})();

	modal_palidrome.init();
});