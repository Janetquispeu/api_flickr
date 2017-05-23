$(document).ready(function(){
	var logDiv = $( "#log" );
 
	for ( var i = 0; i < 5; i++ ) {
	  $( "button" ).eq( i ).on( "click", function( event ) {
	    var msgs = [
	      "button = " + $( this ).index(),
	      "i = " + i
	    ];
	    logDiv.append( msgs.join( ", " ) + "<br>" );
	  });
	}
});