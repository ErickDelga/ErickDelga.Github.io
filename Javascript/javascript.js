const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar() {
    const textoEncriptado = encriptador(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptador(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(i = 0;i < matrizCodigo.length;i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return  stringEncriptada;
}
function btnDesencriptar() {
    const textoEncriptado = desencriptador(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

}
function desencriptador(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(i = 0;i < matrizCodigo.length;i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return  stringDesencriptada;
}
function btnCopiar(){
    mensaje.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    mensaje.value = "";

    alerta.innerHTML = "Copiado al portapapeles";
    setTimeout(()=> alerta.innerHTML = "", 4000);

}