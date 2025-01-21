// Seleciona os elementos
const modalCabecalho = document.getElementById('modalCabecalho');
const modal_cabecalho = document.getElementById('modal_cabecalho');
const modal_cabecalho_fechar = document.getElementById('modal_cabecalho_fechar');

// Abre o modal ao clicar no link
modalCabecalho.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal_cabecalho.style.display = 'flex'; // Exibe o modal
});

// Fecha o modal ao clicar no botão de fechar
modal_cabecalho_fechar.addEventListener('click', function() {
    modal_cabecalho.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal_cabecalho.style.display = 'none';
    }
});