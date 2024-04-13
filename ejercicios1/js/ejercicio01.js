let n1 = parseInt(prompt("Ingrese un numero (n1):"));
let n2 = parseInt(prompt("Ingrese un numero (n2):"));

if(isNaN(n1) || isNaN(n2)) { // isNaN() es lo mismo que hacer x !== x
    alert("Usted no ha ingresado dos numeros... Pulse F5 y pruebe de nuevo.");
} else if (n1 == n2) {
    alert("Ambos numeros son iguales: "+n1);
} else if (n1 > n2) {
    alert(`El numero ${n1} es mayor que el numero ${n2}`);
} else {
    alert(`El numero ${n2} es mayor que el numero ${n1}`);
}