let nome

do {
    nome = prompt("Digite seu nome:")

    if (!nome || nome.length <= 3) {
        alert("O nome deve ter mais de 3 caracteres!")
    }
} while (!nome || nome.length <= 3)


let idade

do {
    idade = Number(prompt("Digite sua idade:"))

    if (isNaN(idade) || idade < 0 || idade > 150) {
        alert("A idade deve ser um número entre 0 e 150!")
    }
} while (isNaN(idade) || idade < 0 || idade > 150)


let salario

do {
    salario = Number(prompt("Digite seu salário:"))

    if (isNaN(salario) || salario <= 0) {
        alert("O salário deve ser um número maior que zero!")
    }
} while (isNaN(salario) || salario <= 0)


let genero

do {
    genero = prompt("Digite seu gênero (f ou m):").toLowerCase()

    if (genero !== "f" && genero !== "m") {
        alert("Digite apenas 'f' ou 'm'!")
    }
} while (genero !== "f" && genero !== "m")


let estadoCivil

do {
    estadoCivil = prompt("Digite seu estado civil (s, c, v ou d):").toLowerCase()

    if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
        alert("Digite apenas 's', 'c', 'v' ou 'd'!")
    }
} while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d")


alert(
    `Cadastro realizado!\n\n`
    + `Nome: ${nome}\n`
    + `Idade: ${idade}\n`
    + `Salário: R$ ${salario.toFixed(2)}\n`
    + `Gênero: ${genero === "f" ? "Feminino" : "Masculino"}\n`
    + `Estado Civil: ${estadoCivil.toUpperCase()}`
)