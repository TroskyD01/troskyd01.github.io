var juego1 = {"nombre":"Counter-Strike: Global Offensive" , "descripcion":"Counter-Strike: Global Offensive (CS: GO) ampliará la jugabilidad de acción por equipos que fue pionera en su lanzamiento hace 12 años. CS: GO incluirá nuevos mapas, personajes y armas y ofrecerá versiones actualizadas del contenido clásico de CS (de_dust2, etc.)." , "valoracion":"imagenes/estrellas5.png" , "lanzamiento":"21 AGO 2012" , "desarrollador":"Valve" , "categoria":"Shooter" , "precio":"15.99" , "portada":"imagenes/juegos/csgo/portada.png" , "mini1":"imagenes/juegos/csgo/foto1.png" , "mini2":"imagenes/juegos/csgo/foto2.png" ,"mini3":"imagenes/juegos/csgo/foto3.png"  };

var elementHTMLNombre = document.getElementById("titulo-juego");
elementHTMLNombre.innerHTML = juego1.nombre;

var elementHTMLNombre = document.getElementById("nombreComprar");
elementHTMLNombre.innerHTML = juego1.nombre;

var elementHTMLDescripcion = document.getElementById("descripcion-juego");
elementHTMLDescripcion.innerHTML = juego1.descripcion;

document.getElementById("valoracion-juego").src= juego1.valoracion;
document.getElementById("portada-juego").src= juego1.portada;
document.getElementById("img1").src= juego1.mini1;
document.getElementById("img2").src= juego1.mini2;
document.getElementById("img3").src= juego1.mini3;

var elementHTMLLanzamiento = document.getElementById("lanzamiento-juego");
elementHTMLLanzamiento.innerHTML = juego1.lanzamiento;

var elementHTMLPrecio = document.getElementById("precio-juego");
elementHTMLPrecio.innerHTML = juego1.precio

var elementHTMLDesarrollador = document.getElementById("desarrollador-juego");
elementHTMLDesarrollador.innerHTML = juego1.desarrollador;

var elementHTMLCategoria = document.getElementById("categoria-juego");
elementHTMLCategoria.innerHTML = juego1.categoria;

var campoCosto = document.getElementById("costo-juego");
var campoCostoFinal = document.getElementById("costo-final-juego");
