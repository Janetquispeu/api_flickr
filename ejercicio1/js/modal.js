$(document).ready(function(){

	var modal_reloj = function(){
		var st={
			imprimir: "#reloj"
		}

		var dom={}

		var catchDom = function(){
			dom.imprimir = $(st.imprimir);
		}

		var afterCatchDom = function () {
			setInterval(fn.updateReloj,1000);
		}

		var fn={
			updateReloj:function(){
				var hora_actual = new Date();
				var hora = hora_actual.getHours();
				var minutos = hora_actual.getMinutes();
				var segundo = hora_actual.getSeconds();

				dom.imprimir.val( hora + " : "+ minutos + " : "+ segundo);
			},
		};

		var initialize = function(){
	    catchDom();
	    afterCatchDom();
	  };

	  return {
	    init: initialize
	  }

	};

	modal_reloj().init();

});