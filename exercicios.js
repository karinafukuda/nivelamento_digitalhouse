//Módulo 2

//Declare duas variáveis chamadas  idade  e  peso, e atribua um valor numérico a ambas.
var idade = 31;
var peso = 80;

//Declare 4 variáveis: nome, sobrenome, numeroDaSorte, idade e atribua seus respectivos valores nas variáveis
var nome = "Karina";
var sobrenome = "Fukuda";
var numeroDaSorte = 13;
var idade = 31;

//Exercício - Tipos de dados : number , string e float
var idade = 31;
var sobrenome ="Fukuda";
var salarioMinimo = 1040.10;

//Declare cinco variáveis com os seguintes dados: seu nome, idade, altura, solteiro e seriesFavoritas utilizando os tipos de dados vistos. 
var nome = "Karina";
var idade = 31;
var altura = 1.69;
var solteiro = false;
var seriesFavoritas = ["The Umbrella Academy" , "Ragnarok" , "Brooklin 99"];

//Cartão de visita esperado: “Natália Lira - Programadora”
var nome= "Natália";
var sobrenome="Lira ";
var profissao = "Programadora";
var cartaoDeVisita = nome + ' ' + sobrenome + ' - ' + profissao;
console.log(cartaoDeVisita);

//Declare e atribua duas variáveis: numeroA e numeroB, em que ambas precisam conter um valor numérico. Em seguida, faça as variáveis de soma, subtração, multiplicação e divisão utilizando essas duas variáveis
var numeroA = 5;
var numeroB = 9;
var soma = numeroA + numeroB;
var subtracao = numeroA - numeroB;
var multiplicacao = numeroA * numeroB;
var divisao = numeroA / numeroB;

//Exercício: Cálculo de média
var trabalhoDeHistoria = 8.0;
var trabalhoDeMatematica = 7.0;
var trabalhoDeCiencia = 10;
var trabalhoDeGeografia = 9.5;
var totalDeTrabalhos = 4;
var media = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / totalDeTrabalhos;

//Condicional IF
//Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação. Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico.
var nome = "João";
var idade = 17;

if( idade >= 18) {
    console.log("Você passou no nosso teste e já pode dirigir!");
}else{
    console.log("Olá, " + nome);
}

//Condicionais - Conta bancária
var saldo = 15.15;

if (saldo > 0) {
    console.log("Seu saldo está positivo! Gostaria de fazer um investimento?");
}

if (saldo < 0 ) {
    console.log("Seu saldo está negativo! Gostaria de fazer um empréstimo?");
}
