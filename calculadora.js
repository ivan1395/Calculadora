//declaramos las variables
let num1 = 0;
let num2 = 0;
let opera;

//Creamos la funcion que coloca el numero presionado
function darNumero(numero) {
    if(num1==0 && num1 !== '0. '){
        num1 = numero;
    }else{
        num1 += numero;
    }
    refrescar();
}

//Funcion que coloca la coma al pulsar dicho boton
function darComa() {
    if(num1 == 0) {
        num1 = '0. ';
    } else if(num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

//Funcion que usa la C para borrar todo
function darC() {
    num1 = 0;
    num2 = 0;
    refrescar();
}

//Esta funcion realiza las distintas operaciones en funcion del boton pulsado
function operar(valor) {
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById('valor_numero').value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

//Funcion para pulsar el boton de igual
   /*
        	suma = 1
        	resta = 2
        	multiplicacion = 3
        	division = 4
        	potencia = 5
    */
function esIgual() {
    num1 = parseFloat(num1);
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}

function refrescar() {
    document.getElementById('valor_numero').value = num1;
}