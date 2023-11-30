const readline = require('readline')

function calcularBhaskara(a, b, c){
    const delta = b ** 2 - 4 * a * c

    if (delta < 0){
        console.log('A equação não possui raiz reais')
    } else if (delta === 0){
        const x = - b / (2*a)
        console.log('A equação possui uma raiz real')
    } else {
        const x1 = (- b + Math.sqrt(delta)) / (2 * a)
        const x2 = (- b + Math.sqrt(delta)) / (2 * a)
        console.log('A equação possui duas raizes reais')
    } 
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Informe o valor de A: ', (a) => {
    rl.question('Informe o valor de B: ', (b) => {
        rl.question('Informe o valor de C: ', (c) => {

            const valorA = parseFloat(a)
            const valorB = parseFloat(b)
            const valorC = parseFloat(c)

            if(!isNaN (a) && !isNaN (b) && !isNaN (c)){
                calcularBhaskara(a, b, c)  
            } else {
                console.log('Por favor insira coeficientes válidos')
            }

            rl.close()
        })
    })
})