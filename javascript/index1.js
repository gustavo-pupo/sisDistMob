//Por que operador colchetes?

//Uma concessionária tem cnpj, endereço (rua, numero e bairro) e um estoque de veículos, 
//no momento apenas 2 veículos, mas não há limite

const concessionaria = {
    cnpj:1234,
    endereco: {
        rua: "tudusbango turusbago",
        numero: 0,
        bairro: "disney"
    },
    estoque: [{
        marca: "ford",
        modelo: "mustang",
        ano: 1967,
        valor: 300000
    },
    {
        marca: "honda",
        modelo: "civic",
        ano: 1997,
        valor: 30000
    }]
}

//  1 usar forEach para exibir cada detalhe de cada carro

concessionaria.estoque.forEach(carro => {
    console.log(carro)
});

// 2 adicionar preço a cada um e mostrar valor medio 
let valores = []
let media = 0
concessionaria.estoque.forEach(carro => {
    valores.push(carro.valor)
    media = valores.reduce((a, b) => a + b, 0)/valores.length
});

console.log(media)
//Seu nome:
//Seu RA:

// const aluno = {
//     'Seu nome': 'Pupo',
//     'Seu ra': 822147638
// }

// console.log(aluno['Seu nome'])
// console.log(aluno['Seu ra'])

// const pessoa = {
//     nome:"Pupo",
//     idade: 21,
//     endereco:{
//         rua:"Rua dos bobos",
//         numero: 0,
//         bairro: "Eichenwalde"
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.endereco.rua)
// console.log(pessoa.endereco.numero)
// console.log(pessoa.endereco["bairro"])