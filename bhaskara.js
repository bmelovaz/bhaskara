const readline = require('readline')

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

            console.log(a)

            rl.close()
        })
    })
})