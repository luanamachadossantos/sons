//criando/declarando a função TocaSom com pârametro iDElementoAudio 
function tocaSom(iDElementoAudio){
    document.querySelector(iDElementoAudio).play();
}

//criando referencia constante listaDeTeclas buscando todos os itens pela clase .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//criando referência variável "contador" iniciando = 0 
 contador = 0;

// estrutura de repetição "while" significa "enquanto algo acontecer"
for( let contador = 0;contador < listaDeTeclas .length = contador+1){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList [1];// acesa o 2 ite da classe de teclas
    const idAudio = `#som_${efeito}`;//templat string  
    Teclas.onclick = function (){ // cria funçao anonima para chamar TocaSom
        tocaSom (idAudio);
    }
    tecla.onkeyup = function(){
        if(EventCounts.code !='tab'){
    tecla.classList.add('ativa');
  }
 tecla.onkeyup = function(){
    tecla.classList.remove('ativa')

}
    }