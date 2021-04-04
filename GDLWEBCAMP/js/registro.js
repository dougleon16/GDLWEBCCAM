(function(){
    "use strict";
    document.addEventListener("DOMContentLoaded",function(){

        //-----------------INICIO DEL CODIGO---------------------
    //Campos datos usuario
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    
    //Campos pases
    let pase_dia = document.getElementById("pase_dia");
    let pase_2dias = document.getElementById("pase_2dias");
    let pase_todosLosDias = document.getElementById("pase_todosLosDias");

    let viernes = document.getElementById("viernes");
    let sabado = document.getElementById("sabado");
    let domingo = document.getElementById("domingo");
   
    //Botones y divs
    let calcular = document.getElementById("calcular");
    let errorDiv = document.getElementById("error");
    let btnRegistro = document.getElementById("btnRegistro");
    let lista_Productos = document.getElementById("lista-productos");
    let suma_prod = document.getElementById("suma-total");

    let eventos = document.getElementById("eventos");

    //Extras
    let camisas = document.getElementById("camisa_evento");
    let etiquetas = document.getElementById("etiquetas");

   //Regalo (Mandatory)
    let regalo = document.getElementById("regalo"); //ESTO EL PROFE LO PUSO AFUERA

   //--EVENTOS--

   //calcular event
   calcular.addEventListener("click", calcularMontos);
   
   //mostrar dias event
   pase_dia.addEventListener("input", mostrarDias);
   pase_2dias.addEventListener("input", mostrarDias);
   pase_todosLosDias.addEventListener("input", mostrarDias);

   //campos de datos event
   nombre.addEventListener("blur",validarCamposDatos);
   apellido.addEventListener("blur",validarCamposDatos);
   email.addEventListener("blur",validarCamposDatos);

   function validarCamposDatos() {
      if(this.value=="") {
         errorDiv.style.display = "block";
         errorDiv.style.color="red";
         errorDiv.innerHTML = `El campo ${this.id} es obligatorio`;
         this.focus();
      } else {
         errorDiv.style.display = "none";
      }
   }
   //validar mail
   email.addEventListener("blur",function(){
      if (this.value.indexOf("@") == -1) { //-1 porque es el index que retorna si no existe
         errorDiv.style.display = "block";
         errorDiv.style.color="red";
         errorDiv.innerHTML="Este no es un email valido.";
         this.focus();
      } 
   });

   /*===METODOS EVENTOS===*/
   //calcular.onclick = calcularMontos;
   function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value==="") {
         alert("Debes elegir un regalo");
         regalo.focus();
      } else {
         //Declares
         let cantidad_PaseDia = pase_dia.value,
             cantidad_Pase2dias = pase_2dias.value,
             cantidad_PaseTodosDias =pase_todosLosDias.value,
             cantidad_camisas = camisas.value,
             cantidad_etiquetas = etiquetas.value;

         let totalPagar = (cantidad_PaseDia*30)+(cantidad_Pase2dias*45)+(cantidad_PaseTodosDias*50)
                          +(cantidad_camisas*.93)+cantidad_etiquetas*2;
                           
         console.log(totalPagar);

         //Validaciones y Carrito/Listado de productos
         let listadoProductos = [];
         if (pase_dia.value!="" && pase_dia.value>=1) 
            listadoProductos.push(pase_dia.value+" Pases por 1 día");

         if (pase_2dias.value!="" && pase_2dias.value>=1)
            listadoProductos.push(pase_2dias.value+" Pases por 2 días");

         if (pase_todosLosDias.value!="" && pase_todosLosDias.value>=1)
            listadoProductos.push(pase_todosLosDias.value+" Pases por todos los días");

         if (camisas.value!="" && camisas.value>=1) 
            listadoProductos.push(camisas.value+" Camisetas");

         if (etiquetas.value!="" && etiquetas.value>=1) 
            listadoProductos.push(etiquetas.value+" Etiquetas");
         
         console.log(listadoProductos);


         //Imprimir RESUMEN / Lista de productos
        lista_Productos.style.display="block"; 
        lista_Productos.innerHTML = "";
        for(let i = 0; i < listadoProductos.length;i++) {
         lista_Productos.innerHTML+=listadoProductos[i]+"<br>";
        }

        //Suma Total
        suma_prod.innerHTML = "$ "+totalPagar.toFixed(2);
         
      }
   }

   //Mostrar checkboxes dias
   function mostrarDias() {
         let cantidad_PaseDia = pase_dia.value,
             cantidad_Pase2dias = pase_2dias.value,
             cantidad_PaseTodosDias =pase_todosLosDias.value;

      let diasElegidos=[];

      //Valida si todos los campos estan vacios para ocultar el id eventos
      if (diasElegidos.length==0) {
         eventos.style.display = "none";
      }

      //Validacion del campo de cada uno de los pases / Limpia el array cada vez se escribe en un campo
      if (cantidad_PaseDia!="" && cantidad_PaseDia>0) {
         eventos.style.display = "block";
         diasElegidos.length=0;
         diasElegidos.push("viernes");

      } else if (cantidad_PaseDia=="" || cantidad_PaseDia==0) {
         viernes.style.display = "none";
      }

      if (cantidad_Pase2dias!="" && cantidad_Pase2dias>0) {
         eventos.style.display = "block";
         diasElegidos.length=0;
         diasElegidos.push("viernes","sabado");

      } else if (cantidad_Pase2dias=="" || cantidad_Pase2dias==0) {
         viernes.style.display = "none";
         sabado.style.display = "none";
      }

      if (cantidad_PaseTodosDias!="" && cantidad_PaseTodosDias>0) {
         eventos.style.display = "block";
         diasElegidos.length=0;
         diasElegidos.push("viernes","sabado","domingo");  

      } else if (cantidad_PaseTodosDias=="" || cantidad_PaseTodosDias==0) {
         viernes.style.display = "none";
         sabado.style.display = "none";
         domingo.style.display = "none";
      }

      //Recorre el array para verificar cuando tiene o no datos y asi mostrar
      for (let i=0; i<diasElegidos.length;i++) {
         
         document.getElementById(diasElegidos[i]).style.display="block";
      }

   
         

      console.log(diasElegidos);
   }
        
    })
}());