import { helados } from "./res/helados.js";

const heladosList = document.getElementById("helados-list")
const btnCombinar = document.getElementById("btn-combinar")

let lista_helados = (localStorage.getItem("helados")) ? localStorage.getItem("helados") : helados;


if(localStorage.getItem("helados")) {
    lista_helados = JSON.parse(localStorage.getItem("helados"));
} else {
    lista_helados = helados;
}

// Renderizo los helados como están actualmente
lista_helados.forEach((helado, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <input id="input-${helado.sabor}" type="checkbox" value="${helado.sabor}" ${(helado.seleccionado) ? 'checked' : ''}><label for="input-${helado.sabor}">${index + 1}. ${helado.sabor}</label>
    `;
    li.querySelector("input[type=checkbox]").addEventListener("change", () => {
        lista_helados[index].seleccionado = !lista_helados[index].seleccionado;
        console.log(lista_helados);
    })
    heladosList.appendChild(li);
});



btnCombinar.addEventListener("click", () => {
    let cantidadSeleccionados = 0;
    lista_helados.forEach((h) => {
        cantidadSeleccionados = (h.seleccionado) ? cantidadSeleccionados + 1 : cantidadSeleccionados;
    });
    localStorage.setItem("helados", JSON.stringify(lista_helados));
    if(cantidadSeleccionados <= 0) {
        alert("Por favor, seleccione al menos un sabor");
    } else if (cantidadSeleccionados > 4) {
        alert("Por favor, recuerde que el limite de sabores es 4.");
    } else {
        alert("Combinación valida! Gracias!");
    }
});
