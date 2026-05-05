const numero = Number(prompt("Digite um número para ver a tabuada:"))

if (isNaN(numero)) {
    alert("Digite um número válido!")
} else {
    let tabuada = `Tabuada do ${numero}\n\n`

    for (let i = 1; i <= 10; i++) {
        tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`
    }

    alert(tabuada)
}