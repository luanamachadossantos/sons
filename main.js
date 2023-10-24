//criando/declarando a função TocaSom com pârametro iDElementoAudio 
function tocaSom(iDElementoAudio){
    document.querySelector(iDElementoAudio).play();
}

//criando referencia constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0 
let contador = 0;

// estrutura de repetição "while" significa "enquanto algo acontecer"
while(contador < listaDeTeclas .length){
    const efeito = listaDeTeclas [contador]. classList [1];
    const idAudio = "#som_"+ efeito; 
    listaDeTeclas[contador].onclick = (function) (){
        tocaSom (idAudio);
    }
    contador = contador + 1; 
    console.log(contador);

} 