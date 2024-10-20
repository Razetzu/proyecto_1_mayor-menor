const inputNumero1 = document.getElementById('number1');
const inputNumero2 = document.getElementById('number2');
const btnIniciar = document.getElementById('start');
const formulario = document.getElementById('form');
const btnEnviar = document.getElementById('Send');
const btnReset = document.getElementById('Reset');
const respuesta = document.getElementById('parrafo');

const compararNumeros = (num1, num2) => {
    if (num1 > num2) {
        return `El número ${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        return `El número ${num2} es mayor que ${num1}`;
    } else {
        return `Los números ${num1} y ${num2} son iguales`;
    }
};

const Cambios = (mensaje, colorFondo, colorTextos) => {
    respuesta.innerHTML = mensaje;
    respuesta.style.backgroundColor = colorFondo;
    respuesta.style.color = colorTextos;
    respuesta.style.padding = '20px';
    respuesta.style.textTransform = 'uppercase';
    respuesta.style.borderRadius = '10px';
};

const Reset = () => {
    inputNumero1.value = '';
    inputNumero2.value = '';
    respuesta.style.backgroundColor = '';
    respuesta.innerHTML = '';
    respuesta.style.color = '';
    formulario.style.display = 'none';
    btnIniciar.style.display = 'block';
};

btnIniciar.addEventListener('click', () => {
    formulario.style.display = 'block';
    btnIniciar.style.display = 'none';
});

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault(); 

    let numero1 = parseInt(inputNumero1.value);
    let numero2 = parseInt(inputNumero2.value);
    let mensaje = compararNumeros(numero1, numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        Cambios("Ingresa datos validos", 'black', 'red');
        return;
    }

    if (numero1 > numero2) {
        Cambios(mensaje, 'green', 'white');
    } else if (numero2 > numero1) {
        Cambios(mensaje, 'blue', 'white');
    } else {
        Cambios(mensaje, 'grey', 'white');
    }
});

btnReset.addEventListener('click', Reset);
