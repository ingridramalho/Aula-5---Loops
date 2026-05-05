const numero = Number(prompt("Digite um número:"))

if (isNaN(numero) || numero <= 0) {
    alert("Digite um número válido maior que zero!")
} else {
    let divisores = ""

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores = divisores + `${i}\n`
        }
    }

    alert(`Divisores de ${numero}:\n\n${divisores}`)
}