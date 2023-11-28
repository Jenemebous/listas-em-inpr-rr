//1
/*
let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um número inteiro: "));
  numeros.push(numero);
}

console.log("Números pares:");

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

console.log("Números ímpares (em ordem inversa):");

for (let i = numeros.length - 1; i >= 0; i--) {
  if (numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
*/

//2

//MINHA QUESTÃO, SEPARADA

//3
/*
let notas = [];
let soma = 0;

for (let i = 1; i <= 4; i++) {
  notas.push(parseFloat(prompt("Digite a nota " + i + ":")));
  soma += notas[i - 1];
}

let media = soma / notas.length;

console.log("Notas: " + notas.join(", "));
console.log("Média: " + media.toFixed(2));
*/


//4
/*
let caracteres = prompt("Digite 10 caracteres:").toLowerCase();
let consoantes = 0;
let consoantesStr = "";

for (let i = 0; i < 10; i++) {
  if ("bcdfghjklmnpqrstvwxyz".includes(caracteres[i])) {
    consoantes++;
    consoantesStr += caracteres[i] + ", ";
  }
}

console.log("Foram lidas " + consoantes + " consoantes.");
console.log("Consoantes: " + consoantesStr.slice(0, -2));
*/



//5
/*
let numeros = [];
let par = [];
let impar = [];

for (let i = 1; i <= 20; i++) {
  numeros.push(parseInt(prompt("Digite o número " + i + ":")));
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    par.push(numeros[i]);
  } else {
    impar.push(numeros[i]);
  }
}

console.log("Números digitados: " + numeros.join(", "));
console.log("Números pares: " + par.join(", "));
console.log("Números ímpares: " + impar.join(", "));
*/


//6
/*
let notas = [];
let medias = [];
let aprovados = 0;

for (let i = 1; i <= 10; i++) {
  notas = [];
  for (let j = 1; j <= 4; j++) {
    notas.push(parseFloat(prompt("Digite a nota " + j + " do aluno " + i + ":")));
  }
  let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
  medias.push(media);
  if (media >= 7.0) {
    aprovados++;
  }
}

console.log("Médias dos alunos: " + medias.join(", "));
console.log("Número de alunos aprovados: " + aprovados);

*/


//7
/*
let numeros = [];

for (let i = 1; i <= 5; i++) {
  numeros.push(parseInt(prompt("Digite o número: " + i + ":")));
}

let soma = 0;
let multiplicacao = 1;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
  multiplicacao *= numeros[i];
}

console.log("Números: " + numeros);
console.log("Soma: " + soma);
console.log("Multiplicação: " + multiplicacao);
*/


//8
/*
let idades = [];
let alturas = [];

for (let i = 1; i <= 5; i++) {
  let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros):"));
  idades[i-1] = idade;
  alturas[i-1] = altura;
}

let idadesInversas = [];
let alturasInversas = [];

for (let i = idades.length - 1; i >= 0; i--) {
  idadesInversas.push(idades[i]);
}
for (let i = alturas.length - 1; i >= 0; i--) {
  alturasInversas.push(alturas[i]);
}

console.log("Idades (em ordem inversa): " + idadesInversas);
console.log("Alturas (em ordem inversa): " + alturasInversas);
     */




//9
/*
let A = [];

for (let i = 0; i < 10; i++) {
  A.push(parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:")));
}

let soma = 0;
for (let i = 0; i < A.length; i++) {
  soma += A[i] ** 2;
}

console.log("A soma dos quadrados dos elementos do vetor A é: " + soma);
*/

//10

/*
let vetor1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let vetor2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let vetor3 = [];

for (let i = 0, j = 0; i < vetor1.length || j < vetor2.length;) {
  if (i < vetor1.length) {
    vetor3.push(vetor1[i]);
    i++;
  }
  if (j < vetor2.length) {
    vetor3.push(vetor2[j]);
    j++;
  }
}

console.log("Vetor 1: " + vetor1);
console.log("Vetor 2: " + vetor2);
console.log("Vetor 3 (intercalado): " + vetor3);

*/



//11
/*

let vetor1 = [];
let vetor2 = [];
let vetor3 = [];
let vetor4 = [];

for(let i = 0; i < 10; i++) {
  vetor1[i] = parseInt(prompt("Digite um valor para o vetor 1:"));
}

for(let i = 0; i < 10; i++) {
  vetor2[i] = parseInt(prompt("Digite um valor para o vetor 2:"));
}

for(let i = 0; i < 10; i++) {
  vetor3[i] = parseInt(prompt("Digite um valor para o vetor 3:"));
}

for(let i = 0; i < 30; i+=3) {
  vetor4[i] = vetor1[i/3];
  vetor4[i+1] = vetor2[i/3];
  vetor4[i+2] = vetor3[i/3];
}

console.log(vetor4);

*/


//12
/*
let idades = [];
let alturas = [];
let somaAlturas = 0;
let alunosAbaixoMedia = 0;


for (let i = 0; i < 30; i++) {
  let idade = parseInt(prompt("Digite a idade do aluno " + (i+1) + ":"));
  let altura = parseFloat(prompt("Digite a altura do aluno " + (i+1) + ":"));
  idades.push(idade);
  alturas.push(altura);
  somaAlturas += altura;
}

let mediaAlturas = somaAlturas / alturas.length;

for (let i = 0; i < 30; i++) {
  if (idades[i] > 13 && alturas[i] < mediaAlturas) {
    alunosAbaixoMedia++;
  }
}

console.log("Número de alunos com mais de 13 anos e altura abaixo da média: " + alunosAbaixoMedia);

*/

//13
/*
let temperaturas = [];
let soma = 0;

// Recebe as temperaturas e soma cada uma delas
for (let i = 0; i < 12; i++) {
  temperaturas.push(parseFloat(prompt("Digite a temperatura média do mês " + (i + 1) + ":")));
  soma += temperaturas[i];
}

// Calcula a média anual
let media = soma / 12;

// Mostra as temperaturas acima da média anual e seus respectivos meses
for (let i = 0; i < 12; i++) {
  if (temperaturas[i] > media) {
    let mes = "";
    switch (i) {
      case 0:
        mes = "Janeiro";
        break;
      case 1:
        mes = "Fevereiro";
        break;
      case 2:
        mes = "Março";
        break;
      case 3:
        mes = "Abril";
        break;
      case 4:
        mes = "Maio";
        break;
      case 5:
        mes = "Junho";
        break;
      case 6:
        mes = "Julho";
        break;
      case 7:
        mes = "Agosto";
        break;
      case 8:
        mes = "Setembro";
        break;
      case 9:
        mes = "Outubro";
        break;
      case 10:
        mes = "Novembro";
        break;
      case 11:
        mes = "Dezembro";
        break;
    }
    console.log("Temperatura acima da média em " + mes + ": " + temperaturas[i]);
  }
}

*/


//14
/*
let perguntas = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?"];

let respostas = [];

for(let i = 0; i < perguntas.length; i++){
  let resposta = prompt(perguntas[i]);
  respostas.push(resposta.toUpperCase());
}

let totalSim = 0;

for(let i = 0; i < respostas.length; i++){
  if(respostas[i] === "SIM"){
    totalSim++;
  }
}

if(totalSim === 2){
  console.log("Suspeita");
} else if(totalSim >= 3 && totalSim <= 4){
  console.log("Cúmplice");
} else if(totalSim === 5){
  console.log("Assassino");
} else {
  console.log("Inocente");
}

*/

//15
/*












*/







//16
/*











*/


//17
/*
function ehPrimo(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let vetor = [];
for (let i = 0; i < 10; i++) {
  vetor.push(parseInt(prompt("Digite um número inteiro:")));
}

let primos = [];
for (let i = vetor.length - 1; i >= 0; i--) {
  if (ehPrimo(vetor[i])) {
    primos.push(vetor[i]);
  }
}

if (primos.length === 0) {
  console.log("Não há números primos no vetor.");
} else {
  console.log("Números primos na ordem inversa de digitação: " + primos.join(", "));
}

*/