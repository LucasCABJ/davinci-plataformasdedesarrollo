let n = 1;
let total = 0;
let nums = [];
let max = Number.MIN_VALUE;
let max_count = 0;
while (n != 0) {
    n = parseInt(prompt("Ingrese un numero (para dejar de ingresar numeros ingrese \"0\""));
    if (n === n && n != 0) {
        if (n > max) {
            max = n;
        }
        nums.push(n);
        total += n;
    }
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] == max) max_count++;
}
alert(`Total de numeros ingresados: ${nums.length}\n
Suma de todos los numeros: ${total}\n
Numero más alto ingresado: ${max}\n
Cantidad de repeticiones de "${max}": ${max_count}`);