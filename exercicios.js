
// 1. Variável nome (string) e idade (number) exibir
console.log(" Exercício 1:");
const nome = "nathan";
const idade = 22;
console.log(nome);
console.log(idade);


// 2. Três variáveis numéricas a, b, c soma dos três valores
console.log(" Exercício 2: ");
const a = 10;
const b = 25;
const c = 7;
const soma = a + b + c;
console.log(`A soma é: ${soma}`);


// 3. preço, Produto e quantidade valor total da compra
console.log(" Exercício 3: ");
const precoProduto = 49.9;
const quantidade = 3;
const valorTotal = precoProduto * quantidade;
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);


// 4. temperaturaCelsius convertida para Fahrenheit: (C * 9/5) + 32
console.log(" Exercício 4: ");
const temperaturaCelsius = 28;
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
console.log(`${temperaturaCelsius}°C equivalem a ${temperaturaFahrenheit}°F`);


// 5. typeof em 4 variáveis: string, number, boolean e não inicializada
console.log(" Exercício 5: ");
let textoExemplo = "olá";
let numeroExemplo = 42;
let booleanoExemplo = true;
let variavelNaoInicializada;

console.log(typeof textoExemplo);          
console.log(typeof numeroExemplo);         
console.log(typeof booleanoExemplo);       
console.log(typeof variavelNaoInicializada);


// intermediario

// 1. Usar % (módulo) para verificar se um número é par ou ímpar
console.log(" Intermediário 1:");
const numero1 = 17;
const parOuImpar = numero1 % 2 === 0 ? "par" : "ímpar";
console.log(`O número ${numero1} é ${parOuImpar}.`);


// 2. chovendo e temGuardaChuva — operadores && e !
console.log(" Intermediário 2:");
const chovendo = true;
const temGuardaChuva = false;
const vaiSeMolhar = chovendo && !temGuardaChuva;
console.log(`Vai se molhar? ${vaiSeMolhar}`);
console.log(`Negação de temGuardaChuva: ${!temGuardaChuva}`);


// 3. Comparar dois números com >, <, >=, <=
console.log(" Intermediário 3:");
const x = 12;
const y = 8;
console.log(`${x} > ${y}  →`, x > y);
console.log(`${x} < ${y}  →`, x < y);
console.log(`${x} >= ${y} →`, x >= y);
console.log(`${x} <= ${y} →`, x <= y);


// 4. Diferença entre == e === — caso onde os resultados divergem
console.log(" Intermediário 4:");
const numeroTexto = "5";
const numeroInteiro = 5;

console.log(numeroTexto == numeroInteiro);   // true

console.log(numeroTexto === numeroInteiro);  // false, pois string !== number


// 5. Operador ternário para verificar maioridade a partir de idade
console.log(" Intermediário 5:");
const idadePessoa1 = 17;
const situacao = idadePessoa1 >= 18 ? "maior de idade" : "menor de idade";
console.log(`Com ${idadePessoa1} anos, a pessoa é ${situacao}.`);


// 6. salario com aumento de 15% usando += / *=
console.log(" Intermediário 6:");
let salario = 2000;
salario += salario * 0.15;   // aumento de 15% somado ao salário atual
// equivalente a: salario *= 1.15;
console.log(`Novo salário: R$ ${salario.toFixed(2)}`);




// 1. Média de 3 notas → aprovado / recuperação / reprovado, SEM if
console.log(" Desafio 1:");
const nota1 = 6.5;
const nota2 = 5.0;
const nota3 = 7.0;
const media = (nota1 + nota2 + nota3) / 3;

//O primeiro valor truthy encerra a expressão
const statusAluno =
  (media >= 6 && "Aprovado") ||
  (media >= 4 && "Recuperação") ||
  "Reprovado";

console.log(`Média: ${media.toFixed(1)} → ${statusAluno}`);


// 2. valorCarrinho + desconto (%) → valor final em uma única expressão
console.log(" Desafio 2:");
const valorCarrinho = 250;
const desconto = 20; // em porcentagem
const valorFinal = valorCarrinho - (valorCarrinho * (desconto / 100));
console.log(`Valor final com ${desconto}% de desconto: R$ ${valorFinal.toFixed(2)}`);


// 3. podeVotar = true apenas se idade >= 16 E for cidadã(o), sem condicionais
console.log(" Desafio 3:");
const idadePessoa2 = 17;
const ehCidada = true;
const podeVotar = (idadePessoa2 >= 16) && ehCidada;
console.log(`Pode votar? ${podeVotar}`);


// 4. Verificar se numero é par usando bit a bit (&)
console.log(" Desafio 4:");
const numero2 = 42;
// o último bit de um número par é sempre 0, e de um ímpar é sempre 1
// (numero & 1) isola esse último bit
const ehPar = (numero2 & 1) === 0;
console.log(`${numero2} é ${ehPar ? "par" : "ímpar"} (numero & 1 = ${numero2 & 1})`);
