//criando/declarando a função TocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamando/invocando a função TocaSomPom pelo clique do botão pom 
 document.querySelector('.tecla_pom').onclick = tocaSomPom;
//criando referencia constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//invocando a função TocaSomPom a partir do intem "0", 1 botão
listaDeTeclas [0].onclick = tocaSomPom;

//criando referência variável "contador" iniciando = 0 
let contador = 0;

// estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < 9 ){
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1; 
    console.log(contador);

} 