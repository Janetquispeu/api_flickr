$(document).ready(function(){
	var contenedor=$("#lista");
	var btn=$("#btn");
	var input=$("#li-texto");

	btn.click(function(){
		var textoInput=$("#li-texto").val();
		var lista="<li>"+textoInput+"</li>"
		$(lista).appendTo(contenedor);
		$("#li-texto").val(" ");
        
  });
});