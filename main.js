

 var a;
 var b;
 var c;
 var Amplitud;
 var Periodo;
 var Longitud;
 var Frecuencia;

 function OnClickDibujar ()
 { 
    a = setInterval(
        Dibujar,
    20/1000);

     Frecuencia = document.getElementById("cfrecuencia").value;
     Longitud = document.getElementById("clongitud").value;
     Amplitud = document.getElementById("camplitud").value;
     Periodo = 1/Frecuencia;
     b = (2*Math.PI)/Longitud;
     c = (2*Math.PI)/Periodo;
    
 }
 
  function OnClickDetener (){ 
      clearInterval (a);}
      var x=0;
      var t=0;

  function Dibujar ()
 {
     var miCanvas = document.getElementById("miCanvas")
     var context = miCanvas.getContext("2d");
     
     context.save();
     context.clearRect(0, 0, 500, 500);
     context.translate(20, 250);
 
     context.beginPath();
     context.moveTo(0, 230);
     context.lineTo(0, -230);
     context.moveTo(-10, 0);
     context.lineTo(460, 0);
     context.closePath();
     context.stroke();
 
     for(var x = -10; x <= 450; x += 10){
         y = miFuncion(x,t);
         context.arc(x, y, 0.01, 0, 2 * Math.PI, false);
         context.strokeStyle = "red";
         context.stroke();
 
     }
     t += 0.001;
     t += 20/1000;
     context.restore();
 }
 function miFuncion(x,t){
     return -(Amplitud * Math.sin(b * x - c * t));
     
 
 
 }