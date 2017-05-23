$(document).ready(function(){
	var modal_informacion=(function(){
		var st={
			document:"body",
			title:"#title",
			demoVentana:"#demo-ventana",
			demoPagina:"#demo-pagina",
			contenedor:"#contenedor"

		};

		var dom={};

		var catchDom=function(){
			dom.document=$(st.document);
			dom.title=$(st.title);
			dom.demoVentana=$(st.demoVentana);
			dom.demoPagina=$(st.demoPagina);
			dom.contenedor=$(st.contenedor);
		};

		var suscribeEvents=function(){
			dom.document.mousemove(events.mouse);
			dom.document.keyup(events.teclado);
		};

		var events={
			mouse:function(e){
				var despX = document.documentElement.scrollLeft; //desplazamiento de la pagina al hacer scroll
			  var despY = document.documentElement.scrollTop;
			  var ventanaX = e.clientX; //coordenadas de la ventana
			  var ventanaY = e.clientY;
			  var paginaX =  ventanaX + despX; //coordenadas de la página
			  var paginaY =  ventanaY + despY;
			  var coorVentana = "Coordinates: (" + ventanaX + "," + ventanaY + ")";
			  var coorPagina = "Coordinates: (" + paginaX + "," + paginaY + ")";

			  var data = {
			    title: "Ratón",
			    param1: coorVentana,
			    param2: coorPagina,
			    class1: "fondoAzul",
			    class2: "fondoAmarillo"
			  }

			  fnMain.informacion(data)
			},
			teclado:function(){
				var evento = window.event || elEvento;
			  var mensajeCaracter = "Caracter: "+ evento.keyCode;
			  var mensajeLetra= "Carácter pulsado:  " + evento.key;

			  var data = {
			    title: "Mouse",
			    param1: mensajeCaracter,
			    param2: mensajeLetra,
			    class1: "fondoAmarillo",
			    class2: "fondoAzul"
			  }

			  fnMain.informacion(data);
			}
		};
		var fnMain={
			informacion:function(data){
				dom.title.text(data.title);
			  dom.demoVentana.text(data.param1);
			  dom.demoPagina.text(data.param2);
			  dom.contenedor.removeClass(data.class1);
			  dom.contenedor.addClass(data.class2);
			}
		};

		var initialize=function(){
			catchDom();
			suscribeEvents();
		};

		return{
			init:initialize
		} 

	})();
	modal_informacion.init();
});