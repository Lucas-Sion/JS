/*

    DOMINANDO ARRAYS no JavaScript

    Map(Mepear item por item no Array)
       - Criar um novo array com a mesma quantidade de itens do array original.
       - O novo array você pode alterar o que quiser em relação ao array original.
       - Você tem acesso a 3 dados:
          - Item por Item do array
          - Posição atual do Array
          - Array Completo

    Reduce(Reduzir o Array a um único valor)
        - Reduz um array inteiro a um ÚNICO valor
        - Você tem acesso a 4 dados:
            - Acumulador
            - Valor Atual
            - Posição atual
            - Array Completo
    
    Filter(Filtrar o array)
    - Cria um novo array filtrando os valores desejados do array Original
    - Você tem acesso a 3 dados:
        - Item por Item do array
        - Posição atual do Array
        - Array Completo

*/

/*const numeros = [1,2,3,8,10]

const dobro = numeros.map((numero) =>{
   return numero * 4 
})

console.log(dobro)
*/
const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluettoth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
    { id: 6, nome: "Tablet 1Pad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.90, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "inpressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
    { id: 10, nome: "Caixa de Son Portátil Sony", preco: 1800.00, temDesconto: false, quantidade: 3 },
];

// CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CLIENTES
/* const novosProdutos = produtos.map( produto =>{

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    // Ternário = IF / else ? = if / : else

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: '  BRL'
        }),
        quantidade: produto.quantidade
    }

 })*/

// QUAL SERÁ O FATURAMENTE, SE VENDERMOS TODO O ESTOQUE

/*   const totalVendas = produtos.reduce((acumulador, produto) => {

        return acumulador + (produto.preco * produto.quantidade)
    }, 0)

    console.log(totalVendas.toLocaleString('pt-br', {
        style: 'currency', currency: 'BRL'
    }))
*/
// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO


/*const promocao = produtos.filter(produto => produto.temDesconto)

console.log(promocao)
*/

// Adicionar + 10 em cada produto
// Filtrar só os em promoção
// Saber qual é o faturamento se vendermos todos em promoção

const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 }
}).filter(produto => produto.temDesconto).reduce((acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)

console.log(faturamentoTotal.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}))
