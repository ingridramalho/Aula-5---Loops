const numeroSecreto = Math.floor(Math.random() * 10) + 1
let tentativas = 0
let palpite

do {
    palpite = Number(prompt("Chute um número de 1 a 10:"))
    tentativas++

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        alert("Digite um número válido entre 1 e 10!")
    } else if (palpite < numeroSecreto) {
        alert("Muito baixo! Tente um número maior.")
    } else if (palpite > numeroSecreto) {
        alert("Muito alto! Tente um número menor.")
    }

} while (palpite !== numeroSecreto)

alert(`Parabéns! Você acertou em ${tentativas} tentativas! O número era ${numeroSecreto}`)