import { empleados } from "./empleados-data.js";

const empleadosPorArea = (p_empleados, p_area) => {
    return p_empleados.filter(x => x.area = p_area);
};

console.log("Empleados por area: ");
console.log(empleadosPorArea(empleados, "Recursos Humanos"));

const empleadosPorLegajo = (p_empleados, p_nLegajo) => {
    return p_empleados.find(x => x.legajo == p_nLegajo);
};

console.log("Empleados por numero de legajo: ");
console.log(empleadosPorLegajo(empleados, 10019));

const jefePorLegajo = (p_empleados, p_numLegajoACargo) => {
    return p_empleados.filter(x => x.a_cargo.includes(p_numLegajoACargo));
};

console.log("Jefe a cargo: ");
console.log(jefePorLegajo(empleados, 1010));

const promedioDeSalarios = (p_empleados) => {
    return p_empleados.reduce((tot, x) => tot+=x.salario, 0) / p_empleados.length;
};

console.log("Promedio de salarios: ")
console.log(promedioDeSalarios(empleados));
