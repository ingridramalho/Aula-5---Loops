function contagemRegressiva(numero) {
    while (numero >= 1) {
        console.log(numero)
        numero--
    }
}

const numero = Number(prompt("Digite um número:"))
contagemRegressiva(numero)