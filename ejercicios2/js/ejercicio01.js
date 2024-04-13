const resultadoDiv = document.getElementById("ej1-resultado");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const btnDividir = document.getElementById("btn-dividir");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const num1 = document.getElementById("ejercicio1-num1");
const num2 = document.getElementById("ejercicio1-num2");


const sumar = () => {
    const resultado = parseInt(num1.value) + parseInt(num2.value);
    resultadoDiv.innerText = `Resultado: ${resultado}`;
    num1.value = "";
    num2.value = "";
    
}

const restar = () => {
    const resultado = parseInt(num1.value) - parseInt(num2.value);
    resultadoDiv.innerText = `Resultado: ${resultado}`;
    num1.value = "";
    num2.value = "";
}

const dividir = () => {
    const resultado = parseInt(num1.value) / parseInt(num2.value);
    resultadoDiv.innerText = `Resultado: ${resultado}`;
    num1.value = "";
    num2.value = "";
}

const multiplicar = () => {
    const resultado = parseInt(num1.value) * parseInt(num2.value);
    resultadoDiv.innerText = `Resultado: ${resultado}`;
    num1.value = "";
    num2.value = "";
}

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnDividir.addEventListener("click", dividir);
btnMultiplicar.addEventListener("click", multiplicar);