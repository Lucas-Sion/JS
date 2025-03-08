/*
        Estrutura de Repetição - LOOP
            - FOR IN
            - Usado para iterar Objetos
*/

const user = { 
    name: 'Rodolfo', 
    age:33, 
    street:"Rua dos Bobos"
}

// users.name -> Rodolfo
// users['name'] -> Rodolfo


for(let key in user){
    console.log(`${key} : ${user[key]}`)
}