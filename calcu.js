
let operacion=0
let resultado=0
var n1=0;
var n2=0;
sum=document.getElementById("suma");
res=document.getElementById("resta");
mul=document.getElementById("multiplicacion");
div=document.getElementById("division");
igl=document.getElementById("igual");
n1=parseFloat(prompt('Inngrese el primer numero'));
n2=parseFloat(prompt('Inngrese el segundo numero'));
sum.addEventListener("click", function () {
    operacion = 1;
  });
res.addEventListener("click", function () {
    operacion = 2;
  });
mul.addEventListener("click", function () {
    operacion = 3;
  });
div.addEventListener("click", function () {
    operacion = 4;
  });
  igl.addEventListener("click", function () {
    switch (operacion){
        case 1:
            resultado=n1+n2;
            alert('El resultado de la suma es:'+resultado)
            break;
        case 2:
            resultado=n1-n2;
            alert('El resultado de la resta es:'+resultado)
            break;
        case 3:
            resultado=n1*n2;
            alert('El resultado de la multiplicacion es:'+resultado)
            break;
        case 4:
            resultado=n1/n2;
            alert('El resultado de la division es:'+resultado)
            break;

    }
  });