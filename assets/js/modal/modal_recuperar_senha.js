// Seleciona os elementos
const modalRecuperarSenha = document.getElementById('modalRecuperarSenha');
const modal_recuperar_senha = document.getElementById('modal_recuperar_senha');
const modal_fechar_recuperar_senha = document.getElementById('modal_fechar_recuperar_senha');

// Abre o modal ao clicar no link
modalRecuperarSenha.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    modal_recuperar_senha.style.display = 'flex'; // Exibe o modal
});

// Fecha o modal ao clicar no botão de fechar
modal_fechar_recuperar_senha.addEventListener('click', function() {
    modal_recuperar_senha.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal_recuperar_senha.style.display = 'none';
    }
});