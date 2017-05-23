$(document).ready(function(){
	var modal_evaluar=(function(){
		var st={
			boton:"#btn",
			lista:"#li-texto"
		};

		var dom={}

		var catchDom=function(){
			dom.boton=$(st.boton);
			dom.lista=$(st.lista);
		};

		var suscribeEvents=function(){
			dom.boton.on("click",events.informacion)
		};

		var events ={

			informacion:function(){
				var cadena=dom.lista.val();
				var resultado = cadena;
				var textMin=resultado.toLowerCase();
				var texMay=resultado.toUpperCase();

				if(cadena==textMin){
					alert("La cadena esta formado por minúsculas")
				}else if(cadena==texMay){
					alert("La cadena esta formado por mayÚsculas");
				}else{
					alert("Esta formada por ambos");
				}
				dom.lista.val(" ");
			}
		}

		var initialize=function(){
			catchDom();
			suscribeEvents();
		}
		return{
			init:initialize
		}
	})();

	modal_evaluar.init();

});