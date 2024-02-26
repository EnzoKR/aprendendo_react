var nome = "Enzo";
/*
no console do navegador 
    prompt - exibe uma janela pop up 
    ex: 
        prompt("Digite sua idade"); - pop up pedindo a idade 
        var idade = prompt("Digite sua idade"); - pop up pedindo a idade, mas adiciona a uma variavel 

    document - seleciona o arquivo / a pagina 
    ex: 
        document.write("<h1>Aprendendo JavaScrip</h1>") - escreve no documento o H1 e exibe o H1 no elementos 
        document.write("<img scr='http://google.com/google.jpg' />") - escreva a tag img e exibe a logo do google
*/

function entrar(){
    var funEntrar = document.getElementById('funEntrar');
    var texto = prompt("Digite seu nome");

    if(texto == '' || texto == null){
    //verifica se o texto está vazio ou nulo, OU == ||
        alert('Digite seu nome novamente')
        funEntrar.innerHTML = 'Bem vindo ...';
    }else{
        funEntrar.innerHTML = 'Bem vindo ' + texto;
    }  
};

function entrar2(nome){
    var funEntrar = document.getElementById('funEntrar2');
    var texto = prompt("Digite seu sobrenome");
    funEntrar.innerHTML = nome + ' ' + texto;
}

/*
<h2>Arrays</h2>
        
var lista = ["Mateus", "Lucas", "Henrique", 15]; // lista é um arrays com 4 elemento 
lista.indexof("Henrique"); // procura na função onde esta o elemente dentro dos "()", devolvendo a posição dele no arrays        
lista.indexof("José"); // quando o elemeto procurado não é encontrado, é retornado o valor de -1 
lista[2] // procura o elemeto pela posição 
lista.join(" / "); // junta os elementos do arrays usando o que estiver dentro dos "()"
lista.pop(); // remove o ultimo 
lista.shift(); // remove o primeiro 
lista[0] = "Marcos" // altera o elementode acordocom a posição referenciada 
lista.push("Mateus"); // adiciona por ultimo o elemento passado

ex de uso:
var lista = ["Mateus", "Lucas", "Henrique", 15];
if(lista.indexof("Mateus")>-1){ // se o item estiver na lista o valor retornado será maior que -1 
    alert("Esse iteme está na lista");
}else{
    alert("Item não encontrado ");
}
*/

// Switch
/*
x = 2;
switch(x){
    case 0:
        alert("O x vale 0!");
        break
    case 1:
        alert("O x vale 1!");
        break
    case 2:
        alert("O x vale 2!");
        break
}
*/
document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca Cola / 3 - Agua gelada </br>");

function pedir(){
    x = prompt("o que deseja pedir? ");
    //prompt só passa str
    switch(x){
        case "0":
            alert("Você pediu um Sorvete");
            break
        case "1":
            alert("Você pediu um  Suco");
            break
        case "2":
            alert("Você pediu um Coca Cola");
            break
        case "3":
            alert("Você pediu uma agua gelada");
            break
        default:
            alert("Ops não temas essa opção")
            break
    } 
}

// temporizador
function acao(){
    document.write("Executando...<br>")
}

// executa de tempo em tempo,  executa infinitamente 
//setInterval(acao, 1000);
// tempo em milessimos 

//setTimeout(acao, 3000);
// demora um tempo para executar e executa uma vez 

var timer = setInterval(acao, 3000);
clearInterval(timer);
// para de executar o serInterval 

/*
Web Storage

cookies - salva sua ultima pagina 
sessions - termina a sessão qnd sai da pagina 

Web storage (salvar dados)
- localStorage 
- sessionStorage

no console: 
    localStorage (fica salva msm se o computador desligar)
        localStorage.setItem("nome", "Enzo");
        localStorage.nome = "Enzo";
        // salva a variavel e o conteudo 

        localStorage.getItem("nome");
        localStorage.remove("nome"); 
*/
var nome = "";
// se o tipo da variavel nome for indefinido faça
if( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome");
}
nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome;

var nome2 = "";
// se o tipo da variavel nome for indefinido faça
if( typeof sessionStorage.nome2 == 'undefined'){
    sessionStorage.nome2 = prompt("Digite seu nome 2 ");
}
nome = sessionStorage.nome2;
document.getElementById('nome2').innerHTML = nome;

/*
variavel "let", é uma variavel que só pode ser usado no mesmo  escopo
Ex:
*/
if (nome == "Enzo"){
    let sobrenome = 'Kato';
    console.log("Enzo"+sobrenome)
}
// sobrenome; ele n vai mostrar o sobrenome pq a variavel LET esta dentro do if e n podemos acessar fora 

const nome3 = "Enzo";
// variavel CONSTante, ela não pode ser mudada 

let primeiros = [1,2,3];
let numeros = [...primeiros,4,5,6];
// ... atribui o valor da variavel primeiros na variavel numeros 
// caso n use os ""..."" ele adiciona um array na variavel 

let pessoa = {
    nome: "Enzo",
    idade: 21,
    cargo: "Programador"
}
let novaPessoa = {
    ...pessoa,
    anoAtual: 2024,
    cidade: "Marília"
}
// usando o Spread Operator

function cadastrarPessoa(info){
    let novosDados ={
        ...info,
        sobrenome: kato
    }     
}
console.log(cadastrarPessoa({nome: 'Enzo'}));

// uso do Rest Operador 
function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios);
}
let usuarios = ("Mateus", "Lucas");
let novosUsuarios = cadastrar(usuarios,"Henrique", "João");

// trabalhando com operações em Array
const lista = [1,2,3,4,5,6];
const novaLista = lista.map(function(item, index){
    return item +index;
});
console.log(novaLista);
// map faz com q passar em cada item do array 
const soma = lista.reduce(function(total,proximo){
        return total + proximo;
});
console.log(soma);
// vai passar item por item somando o proximo
const find = lista.find(function(item){
    return item == 6;
});
console.log(find);
// procura o item na lista 

//função anonima 
function aidcionar(...numeros2){
    let total = numeros2.reduce((total,proximo) => {
        // foi reduzido numeros2.reduce(function(total,proximo){});
        let soma = total + proximo;
    });
    console.log(total);
}
aidcionar(1,2,3,4,5,6);

//includes verifica de o item existe 
let nomes = ['Mateus', 'Lucas'];
console.log(nomes.includes('lucas'));
// retuorna TRUE ou um FLASE
if(nomes.includes('Mateus')){
    console.log('Está na lista');
}else{
    console.log('Não está na lista');
}
// endsWith verifica se o item termina com a referencia
console.log(nomes.endsWith('eus'));
// starsWith verifica se o item começa com a referencia
console.log(nomes.starsWith('Mat'));
// some (tem pelo menos um) retorna TRUE ou False
console.log(nomes.some(nome => nome === 'Mateus'));
// every (todos os item precisam passar pela referencia) retorna TRUE ou FALSE
let nomes2 = [
    {nome: 'Mateus',idade: 18},
    {nome: 'Lucas',idade: 29},
    {nome: 'Henrique',idade:19}
];
console.log(nomes2.every(nome => nome.idade >= 18));

if (nomes2.every(nome => nome.idade >= 18)){
    console.log('Todos os nomes são maiores de idade');
}else{
    console.log('Um ou mais nomes não são maiores de idade');
}



