document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);

  var listaJuegos = document.getElementById("listado");

  for(var i = 0; i < arrJuegos.length; i++){
    arrJuegos[i].id = i;
    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li><a href='" + arrJuegos[i].url+ "?id=" +arrJuegos[i].id +"'>" + "<div class='juego'>" + "<img id='icono' src ='" + arrJuegos[i].miniatura + "'>" + "<p>" + arrJuegos[i].nombre + "</p><p>Precio: " + arrJuegos[i].precio + "</p><p>Categoria: " + arrJuegos[i].categoria + "</p></div></a></li>";
  };
});
