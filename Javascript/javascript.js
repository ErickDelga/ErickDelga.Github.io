const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//Header
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = 100;

const cols = Math.floor(w/20)+1;
const ypos = Array(cols).fill(0);

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, w, h);

	function matrix() {
		ctx.fillStyle ="#0001";
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle ="#0F0";
		ctx.font = "15pt monospase";
		
		ypos.forEach((y, ind)=>{
			const text = String.fromCharCode(Math.random() * 128);
			const x = ind * 20;
			ctx.fillText(text, x, y);
			
			if(y > 100 + Math.random() * 10000) ypos [ind] = 0;
				else ypos [ind] = y + 20;
			
		})
	}

		setInterval(matrix, 50); 
//Fin de Header

function btnEncriptar() {
    const textoEncriptado = encriptador(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.display = "block";
    document.querySelector(".btn-copiar").style.display = "block";
    document.querySelector(".informacion").style.display = "none";

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
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";

    alert("Texto Copiado");
}
function btnLimpiar() {
    location.reload();
}