





//9. Verifique se um array é vazio.
/*
let array = []
let ss = true
for(let i=0; i<array.length; i++){
    if (array[i] === []) 
    return ss;
    break;
}
console.log("a")
*/




//10. Remova o elemento em um índice específico de um array.

/*
let array = ["carambola", "detergente", "almoço", "vitamina", "miocardio"];
for (let i=0; i<array.length; i++){
    array.splice(3, 1);
}
console.log(array)
*/


/*
//11. Verifique se um array contém uma sequência específica de elementos.

let a1 = prompt("Digite a sequência: ");
let a2 = ["carambola", "espaguete", "ceramica"];
let sequencia = true;

for (let i = 0; i < a2.length; i++) {
    if (!a1.includes(a2[i])) {
        sequencia = false;
        break;
    }
}

console.log(sequencia);*/


//12. Crie um novo array com os elementos únicos de dois arrays dados.

/*let a1 = ['uruguai', 'bolivia'];
let a2 = ['pamonha', 'caxumba'];
let a3 = [];

for (let i = 0; i < a1.length; i++) {
    for (let i = 0; i < a2.length; i++) {
        if (!a3.includes(a1[i])) {
            a3.push(a1[i]);
            if (!a3.includes(a2[i])) {
                a3.push(a2[i]);
            }
        }
    }
}
console.log(a3)*/
