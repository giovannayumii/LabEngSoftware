var palavra = document.getElementById("verificar");
palavra.addEventListener("click", isPalindromo, false);

function isPalindromo() {
    let texto = document.getElementById('texto').value;
    let textoSemEspaco = texto.replace(" ", "").toLowerCase();
    let textInvertido = inverter(textoSemEspaco);

    if (textoSemEspaco == textInvertido)
        alert(texto + " é palíndromo") 
    else
        alert(texto + " não é palíndromo") 
}

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}