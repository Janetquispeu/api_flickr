
var modal_ejercicio=(function(){
	var st = {
		divText   : ".div_text",
		contenedor: "#contenedor",
		contInput : "#contInput",
		input     : ".input",
		contDiv		: ".cont_div",
		tpl       : "#tplInput"
	}
	var dom = {};
	var global = {};
	var catchDom = function(){
		dom.divText    = $(st.divText);
		dom.contenedor = $(st.contenedor);
		dom.contDiv 	 = $(st.contDiv);
		dom.tplInput 	 = $(st.tpl);
	};

	var afterCatchDom = function(){
		global.compiled = _.template(dom.tplInput.html());
	}

	var suscribeEvents=function(){
		dom.divText.on("click",events.mostrar);
		dom.contenedor.on("click", "#btn", events.retornar);
	};

	var events = {
		mostrar:function(){
			var $this        = $(this);
			var valorDiv     = $this.text();
			var htmlCompiled = global.compiled({
				mivariable: valorDiv
			});

			$(htmlCompiled).appendTo($this.parent());
			$this.hide();
		},
		retornar:function(){
			var $this=$(this);
			var valInput   = $($this.siblings(st.input)).val();
			var $contInput = $this.parent();
			var $divText   = $contInput.siblings(st.divText);
			$divText.text(valInput);
			$divText.show();
			$contInput.remove();
			
		}
	};
	
	var initialize=function(){
		catchDom();
		afterCatchDom();
		suscribeEvents();
	};

	return{
		init:initialize
	}

})();

modal_ejercicio.init();
