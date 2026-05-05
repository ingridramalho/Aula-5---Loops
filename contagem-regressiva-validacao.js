// Coleta o número do usuário
const numero = Number(prompt("Digite um número inteiro positivo:"))

// Valida se é um número
if (isNaN(numero)) {
    alert("Isso não é um número!")

// Valida se é positivo
} else if (numero <= 0) {
    alert("O número deve ser positivo!")

// Valida se é inteiro
} else if (numero !== Math.floor(numero)) {
    alert("O número deve ser inteiro!")

// Se passou em todas as validações, executa a contagem
} else {
    let i = numero
    while (i >= 1) {
        console.log(i)
        i--
    }
    alert("Contagem finalizada!")
}