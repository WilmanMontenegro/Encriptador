txtE = document.querySelector("#txtE");
txtS = document.querySelector("#txtS");
btnE = document.querySelector("#btnE");
btnD = document.querySelector("#btnD");
alerta = document.querySelector("#alerta");
btnE.addEventListener("click", () => encriptarOdesencriptar(true));
btnD.addEventListener("click",() => encriptarOdesencriptar(false));
function encriptarOdesencriptar(bandera) {

    let texto = txtE.value;

    if (texto == "") {

        alerta.style.visibility = "visible";
        alerta.innerHTML = "por favor, ingrese un texto para procesar";
        setTimeout(function () {
            alerta.style.visibility = "hidden";
        }, 3000);
    } else if (!texto.match(/^[a-zñ\s]*$/)) {
        alerta.style.visibility = "visible";
        alerta.innerHTML = "Error, solo se admiten letras en minusculas y sin acentos";
        setTimeout(function () {
            alerta.style.visibility = "hidden";
        }, 3000);
    } else {
        texto = texto.trim();
        console.log(bandera);

        if (bandera == true) {
            texto = texto.replace(/e/g, "enter");
            texto = texto.replace(/i/g, "imes");
            texto = texto.replace(/a/g, "ai");
            texto = texto.replace(/o/g, "ober");
            texto = texto.replace(/u/g, "ufat");
        } else {
            texto = texto.replace(/enter/g, "e");
            texto = texto.replace(/imes/g, "i");
            texto = texto.replace(/ai/g, "a");
            texto = texto.replace(/ober/g, "o");
            texto = texto.replace(/ufat/g, "u");
        }

        txtS.value = texto;
        navigator.clipboard.writeText(texto)
    }

}
