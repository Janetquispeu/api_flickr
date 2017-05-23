$("#btn").click(function(){
  var texto=$("#texto").val();
  palindromo(texto);
});

function palindromo(cadena) {

  var resultado = "La cadena \""+cadena+"\" \n";
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
  }
  else if(count1<longitud) {
    alert("No es un palindrome");
  }
}
 
