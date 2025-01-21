// Seleciona os elementos
const modalEsqueceuSenha = document.getElementById('modalEsqueceuSenha');
const modal_esqueceu_senha = document.getElementById('modal_esqueceu_senha');
const modal_fechar_esqueceu_senha = document.getElementById('modal_fechar_esqueceu_senha');

// Abre o modal ao clicar no link
modalEsqueceuSenha.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal_esqueceu_senha.style.display = 'flex'; // Exibe o modal
});

// Fecha o modal ao clicar no botão de fechar
modal_fechar_esqueceu_senha.addEventListener('click', function() {
    modal_esqueceu_senha.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal_esqueceu_senha.style.display = 'none';
    }
});