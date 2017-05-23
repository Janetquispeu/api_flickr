$(document).ready(function(){
	var modal_ToDo= (function(){
		var st={
			contenedor: "#lista",
			btn: "#btn",
			input: "#li-texto"
		};
		var dom={};

		var catchDom=function(){
			dom.btn=$(st.btn);
			dom.input=$(st.input);
			dom.contenedor=$(st.contenedor);
		};

		var suscribeEvents=function(){
			dom.btn.on("click",events.crearLista)
		};

		var events={
			crearLista:function(){
				var textoInput=dom.input.val();
				var lista="<li>"+textoInput+"</li>"
				$(lista).appendTo(dom.contenedor);
				dom.input.val(" ");
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

	modal_ToDo.init();
});