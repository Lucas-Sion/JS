/*   Functions  / Funções
        - Trecho de códigos que é executado
         SOMENTE quando solicitado ( Parente gente boa)
        - Trecho de código que pode ser Reutilizado várias vezes

    [x] O que é uma função e como usar
    [x] Função VOID (vazia) / Não RETORNA nada
    [x] Função com parâmetros
    [x] Função Return
    [ ] Arrow Function
*/


/* void */

function digaMeuNome() {
     console.log("Rodolfo Mori")
}

/* parâmentros */

function soma(numero1, numero2) {
    const resultado = numero1 + numero2

    console.log(resultado)
}


/* return */

function estaEndividado(receita, gastos) {
    if (receita > gastos){
        return 'Está no AZUL'
    } else {
        return 'Está no VERMELHO'
    }
}

const Maria = estaEndividado(5000,7000)
const Enzo = estaEndividado(10000,2000)

console.log(Maria)
console.log(Enzo)

/* Arrow Function (Função flecha) */

function abacate () {} // Forma clássica
const digaMeuNome2 = (nome,nome2,nome3) => { // Forma Moderna
    console.log('Rodolfo')

}

digaMeuNome2()