
var modal_ejercicio=(function(){
	var st = {
		tpl       : "#tpl",
		btn				: "#btn"
	}
	var dom = {};

	var global = {};

	var catchDom = function(){
		dom.tpl	 = $(st.tpl);
		dom.btn	 =$(st.btn);
	};

	var afterCatchDom = function(){
		global.compiled = _.template(dom.tpl.html());
	}

	var suscribeEvents=function(){
		dom.btn.on("click",events.mostrar);
	};

	var events = {
		mostrar:function(){
			var $this        = $(this);
			var htmlCompiled = global.compiled({

			});

			$(htmlCompiled).appendTo("body");
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
