(function(){
    "use strict";
 document.addEventListener("DOMContentLoaded",function(){
    //MAPA
    var map = L.map('mapa').setView([20.675873, -103.387742], 20);
     
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
 
     L.marker([20.675873, -103.387742]).addTo(map)
     .bindPopup('GDLWEBCAMP.')
     .openPopup()
     .bindTooltip("La mejor conferencia de diseño web.") //Esto es un pequeño texto que aparece al hacer hover.
     .openTooltip();
   //FIN DEL MAPA

    //Probando que se joder con el DOM
    // let navegacion = document.querySelectorAll(".navegacion-principal");
    // console.log(navegacion);
    // let reservaciones = navegacion[0].childNodes[7];
    // reservaciones.setAttribute("href","registro.html");

    // let reservaciones = document.querySelector("a.reserv");
    // console.log(reservaciones);
    // reservaciones.setAttribute("href","registro.html");

    


 });//DOCUMENT LOADED  
}());