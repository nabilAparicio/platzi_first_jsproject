
// codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm, ");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es "+ perimetroCuadrado + "cm, ");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es "+ areaCuadrado + "cm2 ");

console.groupEnd();

// codigo del triangulo
console.group("triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 3;

console.log(
    "Los lados del Triangulo miden " 
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm "
);
console.groupEnd();

// const perimetroTriangulo = ladoTriangulo * 3;
// console.log("el perimetro del Triangulo es "+ perimetroTriangulo)

// const areaTriangulo = ladoTriangulo * ladoTriangulo;
// console.log("el area del Triangulo es "+ areaTriangulo)

