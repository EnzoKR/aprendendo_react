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