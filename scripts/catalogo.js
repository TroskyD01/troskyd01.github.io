document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);

  var listaJuegos = document.getElementById("listado");

  for(var i = 0; i < arrJuegos.length; i++){

    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li><a href='" + arrJuegos[i].url +"'>" + "<div class='juego'>" + "<img id='icono' src ='" + arrJuegos[i].miniatura + "'>" + "<p>" + arrJuegos[i].nombre + "</p><p>Precio: " + arrJuegos[i].precio + "</p><p>Categoria: " + arrJuegos[i].categoria + "</p></div></a></li>";

    arrJuegos[i].id = i;
    sessionStorage.setItem("idDatos" , arrJuegos[i].id);
    console.log(arrJuegos[i].id);
    console.log(sessionStorage);
  };
  var elementHTMLJuego = document.getElementsByClassName("juego");
  for (var k = 0; k < elementHTMLJuego.length; k++) {
      elementHTMLJuego[k].onclick = function(){
          h =
          alert(h);
      };
    };
  /*  campoCosto.addEventListener("keyup", function(){
    var valorActual = campoCosto.value;
    campoCostoFinal.value = valorActual * 1.22;
  });*/
});
