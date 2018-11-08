document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);
//Obtener id de juego desde el url cargado del catalogo dinamico
  var url = document.URL;
  var idJuego = url.match(/id=(\d+)/)[1];
  var i = idJuego;
//Cargar los datos del juego a la pagina
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

  var elementHTMLCantidadVentana = document.getElementById("cantidadJuegos");
  elementHTMLCantidadVentana.setAttribute("value", 1);

//Variables de precios y envios
  var Precio = parseFloat(arrJuegos[i].precio.replace(/[^0-9\.]/g, ''), 10); //convertir el string precio a numeros para hacer calculo de iva
  var PrecioConIva = Precio * 1.22;
  var Iva = Precio * 0.22;
  var Envio = 0;
  var CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;

  CostoTotal = CostoTotal.toFixed(2);

    var elementHTMLPrecioVentana = document.getElementById("precioVentanaCompra");
    elementHTMLPrecioVentana.innerHTML = "Precio: $" + Precio * elementHTMLCantidadVentana.value;

    var elementHTMLNombreVentana = document.getElementById("nombreVentanaCompra");
    elementHTMLNombreVentana.innerHTML = arrJuegos[i].nombre;

    var elementHTMLEnvioVentana = document.getElementById("costoEnvio");
    elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";

    var elementHTMLIvaVentana = document.getElementById("Iva");
    elementHTMLIvaVentana.innerHTML = "IVA 22%: $" + Iva.toFixed(2);

//Ingresar nombre e email
  var ContinuarCompra = document.getElementById("continuar");
  var DivEnvios = document.getElementById("envio");
  var DivNombreEmail = document.getElementById("email");
  var EmailIN = document.getElementById("emailInput");
  var NombreIN = document.getElementById("nombreInput");
  var DatosIngresados = 0;

  ContinuarCompra.addEventListener("click", function(){
    if (EmailIN.value != '' && NombreIN.value != '') {
    DivNombreEmail.style.display = "none";
    DivEnvios.style.display = "block";
    DatosIngresados = 1;
    }else {
      alert("ERROR: Debe ingresar los datos requeridos!");
    }
  });

//Abrir Ventana
  Envio = 0;
  var elementHTMLCostoTotalVentana = document.getElementById("CostoTotal");
  elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal;

  var elemntHTMLAbrirVentana = document.getElementById("botonComprar");
  elemntHTMLAbrirVentana.addEventListener("click", function(){

    var VentanaComprar = document.getElementById("ventanaCompra");
    VentanaComprar.style.display = "block";
  });

//Cerrar Ventana
    var elemntHTMLCerrarVentana = document.getElementById("cancelarCompra");
    elemntHTMLCerrarVentana.addEventListener("click", function(){

      //Poner los valores al default cuando se cancela
      var VentanaComprar = document.getElementById("ventanaCompra");
      VentanaComprar.style.display = "none";
      document.getElementById('comun').checked = true;
      document.getElementById('digital').checked = true;
      FormEnvioFisico.style.display = "none";
      Direccion.style.display = "none";
      DivNombreEmail.style.display = "block";
      DivEnvios.style.display = "none";
      DatosIngresados = 0;
      elementHTMLCantidadVentana.value = 1;
      PrecioConIva = Precio * 1.22;
      Iva = Precio * 0.22;
      Envio = 0;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";
      elementHTMLIvaVentana.innerHTML = "IVA 22%: $" + Iva.toFixed(2);
      elementHTMLPrecioVentana.innerHTML = "Precio: $" + Precio * elementHTMLCantidadVentana.value;
    });

//Finalizar compra
  var elemntHTMLFinalizarCompra = document.getElementById("finalizarCompra");
  elemntHTMLFinalizarCompra.addEventListener("click", function(){
  var DireccionTextArea = document.getElementById("direccionText");
  var VentanaComprar = document.getElementById("ventanaCompra");
  //si el envio selecionado es el digital y los datos de nombre , email fueron ingresados se finaliza la compra.
    if (document.getElementById('digital').checked == true && DatosIngresados==1) {
      alert("Finalizado con éxito! , Gracias por su compra");
      VentanaComprar.style.display = "none";
    //Poner los valores al default cuando se finaliza
      var VentanaComprar = document.getElementById("ventanaCompra");
      VentanaComprar.style.display = "none";
      document.getElementById('comun').checked = true;
      document.getElementById('digital').checked = true;
      FormEnvioFisico.style.display = "none";
      Direccion.style.display = "none";
      DivNombreEmail.style.display = "block";
      DivEnvios.style.display = "none";
      DatosIngresados = 0;
      elementHTMLCantidadVentana.value = 1;
      PrecioConIva = Precio * 1.22;
      Iva = Precio * 0.22;
      Envio = 0;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";
      elementHTMLIvaVentana.innerHTML = "IVA 22%: $" + Iva.toFixed(2);
      elementHTMLPrecioVentana.innerHTML = "Precio: $" + Precio * elementHTMLCantidadVentana.value;
      DireccionTextArea.value = '';
    }
    else {
    //si el envio selecionado es el fisico y los datos de direccion fueron ingresados se finaliza la compra.
      if (DireccionTextArea.value != '') {
        alert("Finalizado con éxito! , Gracias por su compra");
        VentanaComprar.style.display = "none";
      //Poner los valores al default cuando se finaliza
        var VentanaComprar = document.getElementById("ventanaCompra");
        VentanaComprar.style.display = "none";
        document.getElementById('comun').checked = true;
        document.getElementById('digital').checked = true;
        FormEnvioFisico.style.display = "none";
        Direccion.style.display = "none";
        DivNombreEmail.style.display = "block";
        DivEnvios.style.display = "none";
        DatosIngresados = 0;
        elementHTMLCantidadVentana.value = 1;
        PrecioConIva = Precio * 1.22;
        Iva = Precio * 0.22;
        Envio = 0;
        CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
        elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
        elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";
        elementHTMLIvaVentana.innerHTML = "IVA 22%: $" + Iva.toFixed(2);
        elementHTMLPrecioVentana.innerHTML = "Precio: $" + Precio * elementHTMLCantidadVentana.value;
        DireccionTextArea.value = '';
      }
      else {
        alert("ERROR: Debe ingresar los datos obligatorios!");
      }
    };
});

//Mostrar envios fisicos segun si esta selecionado en el form
  var FormEnvioFisico = document.getElementById("fisicoForm");
  var FormTipoEnvio = document.getElementById("tipoEnvio");
  var Direccion = document.getElementById("direccion");
  FormTipoEnvio.addEventListener("click", function(){

    if (document.getElementById('digital').checked == true) {
      FormEnvioFisico.style.display = "none";
      Direccion.style.display = "none";
      Envio = 0;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";
    }else {
      FormEnvioFisico.style.display = "block";
      Direccion.style.display = "block";
//Agregar costo de envio fisico por defecto (%0.5)
      Envio = PrecioConIva * 0.005 * elementHTMLCantidadVentana.value;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      document.getElementById('comun').checked = true;
      elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
    };
  });

//Agregar costo al precio total segun envio fisico selecionado
    FormEnvioFisico.addEventListener("click", function(){
    if (document.getElementById('comun').checked == true) {
      Envio = PrecioConIva * 0.005 * elementHTMLCantidadVentana.value;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
    }else if(document.getElementById('especial').checked == true){
      Envio = PrecioConIva * 0.02 * elementHTMLCantidadVentana.value;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
    }else{
      Envio = PrecioConIva * 0.05 * elementHTMLCantidadVentana.value;
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
      elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
      elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
    }
  });

//Agregar costo al envio segun cantidad selecionada
  elementHTMLCantidadVentana.addEventListener("change", function(){


      if (document.getElementById('comun').checked == true) {
        Envio = PrecioConIva * 0.005 * elementHTMLCantidadVentana.value;
        CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
        elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
        elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
      }else if(document.getElementById('especial').checked == true){
        Envio = PrecioConIva * 0.02 * elementHTMLCantidadVentana.value;
        CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
        elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
        elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
      }else{
        Envio = PrecioConIva * 0.05 * elementHTMLCantidadVentana.value;
        CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
        elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);
        elementHTMLEnvioVentana.innerHTML = "Envio: $" + (Envio).toFixed(2);
      }


  });

//Agregar costo al precio total segun cantidad selecionada
  elementHTMLCantidadVentana.addEventListener("change", function(){
    if (document.getElementById('digital').checked == true) {
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value);
      elementHTMLEnvioVentana.innerHTML = "Envio: $0.00";
    }else {
      CostoTotal = (PrecioConIva * elementHTMLCantidadVentana.value) + Envio;
    }
  elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $"+ (PrecioConIva * elementHTMLCantidadVentana.value).toFixed(2);
  elementHTMLPrecioVentana.innerHTML = "Precio: $" + Precio * elementHTMLCantidadVentana.value;
  elementHTMLIvaVentana.innerHTML = "IVA 22%: $" + (Iva * elementHTMLCantidadVentana.value).toFixed(2);
  elementHTMLCostoTotalVentana.innerHTML = "Total a pagar: $" + CostoTotal.toFixed(2);

  });

//Cargar link de imagenes desde el array
  document.getElementById("valoracion-juego").src= arrJuegos[i].valoracion;
  document.getElementById("portada-juego").src= arrJuegos[i].portada;
  document.getElementById("ventanaPortada").src= arrJuegos[i].portada;
  var GaleriaIMG1 = document.getElementById("img1");
  var GaleriaIMG2 = document.getElementById("img2");
  var GaleriaIMG3 = document.getElementById("img3");

  GaleriaIMG1.src= arrJuegos[i].mini1;
  GaleriaIMG2.src= arrJuegos[i].mini2;
  GaleriaIMG3.src= arrJuegos[i].mini3;

//Cargar video principal o imagen principal segun los datos del array
  var ImgOvid = document.getElementById("fotomayor");
  if (arrJuegos[i].video!=0) {
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<video controls><source src=" + arrJuegos[i].video + "type='video/mp4'></video>";

  }else {
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + arrJuegos[i].fotomayor + " alt='" + arrJuegos[i].nombre + " Imagen Mayor'>";
  };

//Agrandar imagenes pequeñas al hacerles click
  var elemntHTMLGaleria = [GaleriaIMG1 , GaleriaIMG2 , GaleriaIMG3];
  var GaleriaX = document.getElementById("xx");

  elemntHTMLGaleria[0].addEventListener("click", function(){

    GaleriaX.style.zIndex = "1";
    ImgOvid.innerHTML = "";
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + elemntHTMLGaleria[0].src + ">";

  });
  //
  elemntHTMLGaleria[1].addEventListener("click", function(){

    GaleriaX.style.zIndex = "1";
    ImgOvid.innerHTML = "";
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + elemntHTMLGaleria[1].src + ">";

  });
//
  elemntHTMLGaleria[2].addEventListener("click", function(){

    GaleriaX.style.zIndex = "1";
    ImgOvid.innerHTML = "";
    ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + elemntHTMLGaleria[2].src + ">";

  });
//
  var GaleriaX = document.getElementById("xx");
  GaleriaX.addEventListener("click", function(){

    GaleriaX.style.zIndex = "-1";
    ImgOvid.innerHTML = "";
    if (arrJuegos[i].video!=0) {
      ImgOvid.innerHTML = ImgOvid.innerHTML + "<video controls><source src=" + arrJuegos[i].video + "type='video/mp4'></video>";
    }else {
      ImgOvid.innerHTML = ImgOvid.innerHTML + "<img src=" + arrJuegos[i].fotomayor + " alt='" + arrJuegos[i].nombre + " Imagen Mayor'>";
    };
  });
});
