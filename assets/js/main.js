const frase = document.querySelector("#inputOne"); //tolowercase es una funcion que lo que hace es que nos devulve todo en minusculas.
const printRes = document.querySelector("#printContent");
const btnEncriptar = document.querySelector("#inputCript");
const botonDesencriptado = document.querySelector("#inputDcript");
const btncopiar = document.querySelector("#printCopy");
const btnlimpiar = document.querySelector("#printClean");
const navMenu = document.querySelector("#navMenu");
const navMobile = document.querySelector(".nav__menu");
const textOne = document.querySelector(".labelOne");
let clave = ["enter", "ober", "imes", "ai", "ufat"];
let letras = ["e", "o", "i", "a", "u"];
let textParaDesencriptar = [];


function limpiarInput() {
  frase.value = "";
}

function limpiarTextarea() {
  printRes.value = "";
}

eventos();
function eventos() {
  btnEncriptar.addEventListener("click", encriptar);
  botonDesencriptado.addEventListener("click", desEncriptado);
  btncopiar.addEventListener("click", copiar);
  btnlimpiar.addEventListener("click", limpiar);
}

function limpiar() {
    frase.value = "";
    printRes.value = "";
    textIndeOne(false);
  }
  
  function textIndeOne(value){
    if(value){
      textOne.style = "display:none";
    }else {
      textOne.style = 'display: block'
  }
}

function copiar() {
    const mensaje = printRes.value;
    navigator.clipboard.writeText(mensaje);
}
navMenu.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    navMobile.classList.toggle("active-mobile");
});
textOne.addEventListener('click', () => {
    textIndeOne(true)
})

function encriptar() {
  let texto = frase.value.toLowerCase();
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  printRes.value = textoCifrado;
}
function desEncriptado() {
  let texto = frase.value.toLowerCase();
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  printRes.value = textoCifrado;
}
