document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);

i = sessionStorage.getItem("idDatos");
  console.log(sessionStorage);


    var elementHTMLNombre = document.getElementById("titulo-juego");
    elementHTMLNombre.innerHTML = arrJuegos[i].nombre;

    var elementHTMLNombre = document.getElementById("nombreComprar");
    elementHTMLNombre.innerHTML = arrJuegos[i].nombre;

    var elementHTMLNombre = document.getElementById("titulopag");
    elementHTMLNombre.innerHTML = "Tienda Juegos - " + arrJuegos[i].nombre;

    var elementHTMLDescripcion = document.getElementById("descripcion-juego");
    elementHTMLDescripcion.innerHTML = arrJuegos[i].descripcion;

    var elementHTMLLanzamiento = document.getElementById("lanzamiento-juego");
    elementHTMLLanzamiento.innerHTML = arrJuegos[i].lanzamiento;

    var elementHTMLPrecio = document.getElementById("precio-juego");
    elementHTMLPrecio.innerHTML = arrJuegos[i].precio

    var elementHTMLDesarrollador = document.getElementById("desarrollador-juego");
    elementHTMLDesarrollador.innerHTML = arrJuegos[i].desarrollador;

    var elementHTMLCategoria = document.getElementById("categoria-juego");
    elementHTMLCategoria.innerHTML = arrJuegos[i].categoria;

    document.getElementById("valoracion-juego").src= arrJuegos[i].valoracion;
    document.getElementById("portada-juego").src= arrJuegos[i].portada;
    document.getElementById("img1").src= arrJuegos[i].mini1;
    document.getElementById("img2").src= arrJuegos[i].mini2;
    document.getElementById("img3").src= arrJuegos[i].mini3;


  var campoCosto = document.getElementById("costo-juego");
  var campoCostoFinal = document.getElementById("costo-final-juego");

/*  campoCosto.addEventListener("keyup", function(){
    var valorActual = campoCosto.value;
    campoCostoFinal.value = valorActual * 1.22;
  });*/
});
