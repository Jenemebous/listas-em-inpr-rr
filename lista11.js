function imprimir11vezes(){
    for(var i=0;i<11;i++) {
        console.log('Eu gosto de JS')
    } 
}

imprimir11vezes('Eu gosto de JS');


/*function sequencia_um_ao_lado_do_outro(){
let linha = ""
for ( var i = 1 ; i <= 20 ; i+=1)
linha += (1 * i) + "\t";
console.log(linha) 
}

sequencia_um_ao_lado_do_outro()*/

/*var números = [
  1234 , // 1
  2468 , // 2
  3579 , // 3
  68420 , // 4
  500 , // 5
  
]

var maiorNúmero = 0

for ( let z = 1 ; z < números.length ; z++ ){
var número = números[z]

if ( número > maiorNúmero ){
maiorNúmero = número

}

}

function imprimir(){
console.log(maiorNúmero)

}

imprimir()*/

/*3. Escreva um programa que leia 5 números e informe a soma e a média dos números.*/

/*let soma = 0
for ( let n = 1 ; n <= 5 ; n++ ){
let valor = prompt("digite um número" + n + ":")
valor = parseInt(valor)
soma = valor + soma

}

function resultado(){
let média = soma / 5
console.log(média)

}

resultado()/*

/*4. Escreva um programa que imprima na tela apenas os números ímpares entre 1 e 50.*/

/*function impares(){
for ( let a = 1 ; a <=50 ; a+= 2)
console.log(a)
}

impares()*/

/*5. Escreva um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido
por eles.*/

/*function intervalos(){
let número_1 = prompt("digite o número 1 ")
número_1 = parseInt(número_1)
let número_2 = prompt("digite o número 2 ")
número_2 = parseInt(número_2)

for (let h = 0; h <= número_2 - número_1; h++) {
  console.log("contador: " + h + " - numero do intervalo: " + (número_1 + h));
}

for (let h = número_1; h <= número_2; h++) {
  console.log("o valor é " + h);
}

}

intervalos()*/

/*6. Altere o programa anterior para mostrar no final a soma dos numeros.*/



/*7. Desenvolva um gerador de tabuada,capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve
informar de qual numero ele deseja ver a tabuada.*/

/*function tabuada(multiplicador){
let resultado = ""
for ( let contador = 1 ; contador <= 10 ; contador++ ){
multiplicação = contador * multiplicador
resultado = resultado + "\t" + multiplicação

}

console.log(resultado)
}

tabuada(4)
tabuada(9)
tabuada(5)
tabuada(7)*/

/*8. Escreva um programa que peça 10 números inteiros,calcule e mostre a quantidade de números pares e a quantidade de
números impares.*/



/*9. Escreva um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.Ex.: 5!=5.4.3.2.1=120*/

/*let F = prompt("digite um número")
F = parseInt(F)
let fatorial = F

for ( r = 1 ; r < F ; r++ ){
alert ("Fatorial = " + fatorial + " * ( " + F + " - " + r + " ) " )
fatorial = fatorial * ( F - r ) 

}

function fatoração(){
console.log( F + " ! = " + fatorial)

}

fatoração()*/

/*10. Escreva um programa que informa todos os divisores de um determinado número.*/

/*function divisor(){
let D = prompt("digite um número")
D = parseInt(D)

for ( let cont = 1 ; cont <= D ; cont++){
if ( D%cont == 0 ){
 alert(cont) 

}
  
}

}

divisor()*/

/*11. Escreva um programa que determinada se um número informado pelo usuário é primo ou não. Um número primo éaquele
que é divisível somente por ele mesmo e por 1.*/



/*12. Escreva um programa que imprime uma linha de asteriscos. O programa deve ler o tamanho da linha e depois exibir essa
linha. Por exemplo, se o programa ler um tamanho de 4,ele deverá exibir: **** */



/*13. Escreva um programa que imprime um quadrado de asteriscos. O programa deve ler o lado de um quadrado e depois exibir
esse quadrado a partir de asteriscos.Seu programa deverá funcionar para quadrados de todos os tamanhos de lado entre 1
e 20.*/



/*14. Escreva um programa que contenha uma função imprimeImpares(inicio, fim) que imprime todos os números ímpares
começando com inicio e incluindo fim .*/



/*15. Escreva um programa que contenha uma função contarDe10em10 conte até 100 de 10 em 10 (imprimindo a sequência 10,
20, 30, ... 100).*/

/*function dez_em_dez(){
for ( let m = 10 ; m <=100 ; m+= 10)
console.log(m)
}

dez_em_dez()*/


/*Exercícios com Turtle*/

/*16. Escreva um programa que contenha uma função chamada poli que use um for para fazer uma tartaruga desenhar
qualquer polígono regular (regular significa todos os lados com o mesmo comprimento, todos os ângulos iguais, para
encontrar o ângulo, divida 360 pelo número de lados). A função deveter tamanho, num Lados como parâmetros.Então,
poli(40, 4) desenharia um quadrado onde os lados tivessem 40 pixels decomprimento.*/



/*17. Escreva um programa que contenha uma função contaPrimos(a, b)que conte todos os números primos entre a e b,
incluindo a e b.Sua função deve retornar a contagem.Ele não deve imprimir nada no console.*/


