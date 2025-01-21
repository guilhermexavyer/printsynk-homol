// Seleciona os elementos
const modalSair = document.getElementById('modalSair');
const modal_sair = document.getElementById('modal_sair');
const modal_sair_fechar = document.getElementById('modal_sair_fechar');

// Abre o modal ao clicar no link
modalSair.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal_sair.style.display = 'flex'; // Exibe o modal
});

// Fecha o modal ao clicar no botão de fechar
modal_sair_fechar.addEventListener('click', function() {
    modal_sair.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal_sair.style.display = 'none';
    }
});