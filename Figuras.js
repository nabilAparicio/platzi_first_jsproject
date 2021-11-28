
// codigo del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm, ");

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}

//  = ladoCuadrado * 4;
// console.log("el perimetro del cuadrado es "+ perimetroCuadrado + "cm, ");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el area del cuadrado es "+ areaCuadrado + "cm2 ");



console.groupEnd();

// codigo del triangulo
console.group("triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del Triangulo miden " 
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm "
// );

function perimetroTriangulo(lado1, lado2, base){
    return  lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return  (base * altura) / 2
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log("el perimetro del Triangulo es "+ perimetroTriangulo);

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("el area del Triangulo es "+ areaTriangulo +"cm2");

console.groupEnd();

// codigo del circulo 

console.group("circulos");

function diametroCirculo(radio){
    return radio * 2 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)

    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio)*PI
}
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI
// const areaCirculo = (radioCirculo * radioCirculo) * PI

// console.log("el radio del Circulo es: " + radioCirculo)

// console.log("el diametro del circulo es: " + diametroCirculo)

// console.log("pi es: " + PI)

// console.log("el perimetro del Circulo es "+ perimetroCirculo);

// console.log("el area del Circulo es "+ areaCirculo +"cm2");

console.groupEnd();

// interactuando con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("inputTrianguloA");
    const valueA = inputA.value;
    const inputB = document.getElementById("inputTrianguloB");
    const valueB = inputB.value;
    const inputC = document.getElementById("inputTrianguloC");
    const valueC = inputC.value;

    const perimetro = perimetroTriangulo(valueA, valueB, valueC);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloAltura");
    const value = input.value;
    const inputC = document.getElementById("inputTrianguloC");
    const valueC = inputC.value;

    const area = areaTriangulo(valueC, value);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}