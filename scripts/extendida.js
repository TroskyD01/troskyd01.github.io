document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);
//obtener id de juego desde el url cargado del catalogo dinamico
  var url = document.URL;
  var idJuego = url.match(/id=(\d+)/)[1];
  var i = idJuego;
//cargar los datos del juego a la pagina
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

  var elementHTMLPrecioVentana = document.getElementById("precioVentanaCompra");
  elementHTMLPrecioVentana.innerHTML = "Precio: " + arrJuegos[i].precio;

  var elementHTMLNombreVentana = document.getElementById("nombreVentanaCompra");
  elementHTMLNombreVentana.innerHTML = arrJuegos[i].nombre;

  var elementHTMLNombreVentana = document.getElementById("Iva");
  elementHTMLNombreVentana.innerHTML = "IVA: %" + 22;

  var precio = parseFloat(arrJuegos[i].precio.replace(/[^0-9\.]/g, ''), 10); //convertir el string precio a numeros para hacer calculo de iva
  var costoTotal = precio * 1.22;
//Abrir Ventana
  var elementHTMLCostoTotalVentana = document.getElementById("CostoTotal");
  elementHTMLCostoTotalVentana.innerHTML = "Costo Total: $" + costoTotal.toFixed(2);

  var elemntHTMLAbrirVentana = document.getElementById("botonComprar");

  elemntHTMLAbrirVentana.addEventListener("click", function(){

    var VentanaComprar = document.getElementById("ventanaCompra");
    VentanaComprar.style.display = "block";
  });
//Cerrar Ventana
  var elemntHTMLCerrarVentana = document.getElementById("cancelarCompra");

  elemntHTMLCerrarVentana.addEventListener("click", function(){

    var VentanaComprar = document.getElementById("ventanaCompra");
    VentanaComprar.style.display = "none";
  });

//cargar link de imagenes desde el array
  document.getElementById("valoracion-juego").src= arrJuegos[i].valoracion;
  document.getElementById("portada-juego").src= arrJuegos[i].portada;
  document.getElementById("ventanaPortada").src= arrJuegos[i].portada;
  document.getElementById("img1").src= arrJuegos[i].mini1;
  document.getElementById("img2").src= arrJuegos[i].mini2;
  document.getElementById("img3").src= arrJuegos[i].mini3;

//cargar video principal o imagen principal segun los datos del array
  var ImgOvid = document.getElementById("fotomayor");
  if (arrJuegos[i].video!=0) {
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<video controls><source src=" + arrJuegos[i].video + "type='video/mp4'></video>";
  }else {
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + arrJuegos[i].fotomayor + " alt='" + arrJuegos[i].nombre + " Imagen Mayor'>";
  };

});
