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

//Condicional - Votação

var idade = 17
if ( idade == 16 ){
    console.log("Seu voto é opcional");
}
if (idade >= 18){
    console.log("Você é obrigado a votar");
}

//Condicionais - Autoescola
var idade = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
}else{
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
}

//Condicionais - Estrangeiro
var estrangeiro = true

  if (estrangeiro){
    console.log("Você poderia apresentar seu RNE, por favor?")
  }else{
    console.log("Você poderia apresentar seu CPF, por favor?")
  }

  //Condicional IF ELSE - Aposentado
  var idade = 40

  if (idade > 65){
      console.log("Você já pode se aposentar")
  } else {
   console.log("Você ainda não pode se aposentar")
  }

//Condicionais - IF ELSE - Par ou ímpar?

var numeroDaSorte = 18

if ( numeroDaSorte % 2 == 0){
    console.log("Par")
}else{
    console.log("Ímpar")
}

//Condicional ELSE IF - Petshop
var petPeso = 7

if (petPeso < 4){
    console.log("Abaixo do Peso")
}else if (petPeso > 10){
    console.log("Acima do Peso")
}else{
    console.log("Peso normal")
}

//Condicional ELSE IF - Lados Iguais

var ladosIguais = 0

if ( ladosIguais == 3){
    console.log("Equilátero")
}else if( ladosIguais == 2){
    console.log("Isósceles")
}else{
    console.log("Escaleno")
}

//Operadores lógicos
var produtoQtd = 3
var produtoAtivo = true

if ( produtoQtd > 0 && produtoAtivo ){
    console.log("Você pode finalizar essa compra")
}else{
    console.log("Produto não está disponível para compra")
}

var usuarioAltura = 170
var usuarioIdade = 21

if ( usuarioAltura > 150 || usuarioIdade >= 21){
    console.log("Você pode subir")
}else{
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
}

//Banco
var diaSemana = 'sabado'

if(diaSemana != "sabado" && diaSemana != "domingo")

{

   console.log("Você pode ir ao banco");
}else{

   console.log("O banco está fechado, tente outro dia");
}

//Módulo 3
//Loop For Tabuada do Sete
var tabuada = 7

for (var i = 1; i < 11; i++) {

console.log (tabuada + " x " + i + " = " + (tabuada * i))

}

//Bom dia, grupo!
for(var i = 1 ; i < 8 ; i++){
    console.log("Bom dia, grupo!");
}

//Loop com Array
var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]
for (var i = 0 ; i < listaDeCarros.length ; i++){
    console.log("Nome do Carro: " + listaDeCarros[i])
}

//Lucros
var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;
for(var i = 0; i < listaDeLucro.length ; i++){
    lucroTotal+= listaDeLucro[i]
}
console.log(lucroTotal)

//Saldo Negativo
var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

for(var i = 0; i <listaDeGanhos.length ; i++){
    if (listaDeGanhos[i] < 0){
        ++totalNegativos
    }
}
console.log(totalNegativos)

//Break ou Continue

var cartela = [8, 13, 18, 22, 42, 49]
  var numeroSorteado = 42

    for(var i = 0 ; i < cartela.length ; i++){
      if( numeroSorteado == cartela[i])
      console.log("Encontrei o número!")
      break
    }


//Números Pares
    for ( var i = 0 ; i <= 20 ; i++){
        if ( i % 2 ===0 ){
            console.log(i)
            continue
        }
    }

//Sobrenome da família
    var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

var sobrenome = "Macedo"
var sobrenome2 = "Sousa"

for (var i = 0 ; i < familia.length ; i++){
    if (familia[i] != "Pedro"){
        console.log( familia[i] + " " + sobrenome)
        continue
    } else{
        console.log( familia[i] + " " + sobrenome2)
    }
}

//Baralho
var baralho = ["Ás", "Dama", "Rei", "Valete"]
  
for (var i = 0 ; i < baralho.length ; i++){
  if (baralho[i] == "Rei"){
    console.log("Encontrei o Rei!")
    break
  }
}

//Declarando Funções
function listarProdutos( ){

    var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
    
    for(var i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
    
    }

//cartão de visita
function cartaoDeVisitas ( ){
    console.log( nome + sobrenome)
}


//Tabuada do Sete
function tabuadaDoSete ( ){
    for ( var i = 1 ; i <= 10; i++){
           console.log( "7 x " + [i] + " = " + [i]*7 )
    }
}

//Funções Parametrizadas
function menorNumero ( a , b ){
    if (a < b){
        return a
    } else{
        return b
    }
   }

//autonomia
function autonomia ( quantidadeDeCombustivel , rendimento) {
    return (quantidadeDeCombustivel * rendimento)
}

//Calcula valor devido
function calculaValorDevido (pesoDaRoupaSuja ) {
    return( pesoDaRoupaSuja * 5)
 }

 //Calcula valor devido 2
 function calculaValorDevido ( pesoDaRoupaSuja ){
    return (( pesoDaRoupaSuja * 3 ) + 10 )
}


//Módulo 4
//Elevador
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
for(i = 0; i < moradores.length; i++){
    
if(i % 2 == 0){
console.log("O morador " + moradores[i] + " pode usar o elevador");
}
}

//Dados de um exercício
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto (array)

{

if(array[1] >= 18 && array[2] >=170 )

{

return true

}else{

return false

}

}

//Academia
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = [];
var grupoC = [];

for(var i = 0; i < alunos.length; i++){

  if(alunos[i] >= 170){

      grupoC.push(alunos[i]);

  }else if(alunos[i] >= 160){

      grupoB.push(alunos[i]);

  }else{

      grupoA.push(alunos[i]);

  }

}

//Estacionamento
// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
 ]
 
 function calcularNumeroDeEntradas(placa) {
 
 var numeroEntradas = 0
 
  for(i = 0; i < placas.length; i++) {
 
     if (placas[i] == placa) {
 
        numeroEntradas ++;
 
  }   else {
 
     }
 
  }
 
            return numeroEntradas;
 
 }
 
 function calcularValorDevido(placa) {
 
 var entradas = calcularNumeroDeEntradas(placa);
 
     if (entradas < 21) {
 
           return   entradas * 10
 
 }    else if (entradas >= 21) {
 
           return entradas * 20
 
 }
 
 }

 
 //Cinema
 function calculaGostos (notas) {

    var nNaoGostaram = 0;
 
    var nMediano = 0;
 
    var nGostaram = 0;
 
    for (var i = 0 ; i < notas.length ; i++) {
 
        if (notas[i] >= 0 && notas[i] < 2) {
 
            nNaoGostaram++;
 
        }  
 
        else if(notas[i] >= 2 && notas[i] < 4) {
 
            nMediano++;
 
        } else {
 
            nGostaram++;
 
        }
 
    }
 
    return [nNaoGostaram, nMediano, nGostaram];
 
 }


//Personagens

function filme(personagens, filmes, lancamentos, id)

{

 if ((id > 0) && (id <= filmes.length)) {

   var opt = id - 1;

   return personagens[opt] + " é um personagem do filme " + filmes[opt] + " que estreou no cinema em " + lancamentos[opt] + ".";

 }else{

   return "Essa não é uma opção válida.";

 }

}

//Comissão
function comissao(preco,porcentagem){

    var resultado = (preco * porcentagem)/100
    
    return resultado
    
    }

//Maior que o número 
function maiorQueNum(array, num) {

    var resultado = [];
   
      for (i = 0; i < array.length; i++) {
   
        if (array[i] > num) {
   
          resultado.push(array[i]);      
   
        }
   
      }
   
      return resultado;
   
   }

//Busca Divisível por
function buscarDivisivelPor(array, num)
{

for( var i = 0 ; i< array.length; i++){
    if(array[i]!=0 && array[i]%num==0){
    return array[i]
        break
}else if(i == array.length || num == 100){
    return "Nenhum número válido encontrado!"
    }
}
}

//Repetindo palavras
function repete(valor, qtd)
{
for (var i = 0; i < qtd; i++) {
console.log(valor)
}

}

//Séries
function series(prefixo, array)

{

  var newArray = []

 for(var i =0; i < array.length; i ++){

     newArray.push(prefixo+ ' ' +  array[i])

 }

  return  newArray

}




