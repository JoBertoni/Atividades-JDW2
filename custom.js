// Botão C - clear
document.querySelector(#clear).addEventListener("click", ()=>{
    document.querySelector("#display").value = " ";
    // no #display (ou visor) limpando o número informado
})

const backSpace = () => {
    const backSpace = document.querySelector("#display").valeu.slice(0, -1);
    // declarando constante NUM e tirando -1 (número da direita pra esquerda) em #display

    document.querySelector("#display").value = num;
    // igualendo e atualizando NUM no #display (visor)
}