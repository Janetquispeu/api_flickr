$(document).ready(function(){
	var modal_ajax = (function(){
		var st={
			tplTemplate 	 : "#tplTemplate",
			tbody					 : "#tBody",
			btnDiv		  	 : "#btnDiv",
			btnTabla	 		 : "#btnTabla",
			tHead				   : "#tHead",
			containerDiv   : "#containerDiv",
			trBody		     : ".trBody",
			containerTr    : ".container_tr",
			divBlock 			 : ".div_block",
			divAncho 			 : ".div_ancho" 
		}
		var dom={}
		var global={}

		var catchDom = function(){
			dom.tplTemplate    = $(st.tplTemplate);
			dom.tbody			  	 = $(st.tbody);
			dom.btnDiv			   = $(st.btnDiv);
			dom.btnTabla	     = $(st.btnTabla);
			dom.tHead  		 	   = $(st.tHead);
			dom.containerDiv   = $(st.containerDiv);
			dom.trBody         = $(st.trBody);
		}

		var afterCatchDom = function(){
			global.compiled = _.template(dom.tplTemplate.html());
			events.mostrarTable();
		}

		var suscribeEvents = function(){
			dom.btnDiv.on("click", events.mostrarDiv);
			dom.btnTabla.on("click",events.mostrarTabla);
		}
		var events = {
			mostrarTable : function(){
				$.getJSON("https://jsonplaceholder.typicode.com/posts?userId=2",function(value){
					$.each(value,function(val,object){
						var htmlCompiled = global.compiled({
							mivariable_user  : object.userId,
							mivariable_id    : object.id,
							mivariable_title : object.title,
							mivariable_body  : object.body
						});

						$(htmlCompiled).appendTo(dom.tbody);
					});
				});
			},
			mostrarDiv : function(){
				$(st.containerTr).removeClass("container_tr").addClass("div_block");
				$(st.trBody).removeClass("trBody").addClass("div_ancho");
				dom.tHead.hide();
				dom.tbody.show();
				btnDiv.disabled=true;
			},
			mostrarTabla : function(){
				btnDiv.disabled=false;
				dom.tHead.show();
				$(st.divBlock).removeClass("div_block").addClass("container_tr");
				$(st.divAncho).removeClass("div_ancho").addClass("trBody");
			}
		}
		var initialize = function(){
			catchDom();
			afterCatchDom();
			suscribeEvents();
		}
		return{
			init:initialize
		}
	})()
	modal_ajax.init();
});