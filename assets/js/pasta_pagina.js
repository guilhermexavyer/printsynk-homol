const pasta_pagina = document.getElementById('pasta_pagina');
const paginas = document.querySelectorAll('.tipo-pagina');

// Função para atualizar a exibição com base no valor selecionado
function atualizarVisibilidade() {
    const valorSelecionado = pasta_pagina.value;

    // Esconde todas as divs
    paginas.forEach(pagina => {
        pagina.style.display = 'none';
    });

    // Exibe a div correspondente ao valor selecionado
    if (valorSelecionado) {
        const divCorrespondente = document.querySelector(`.tipo-pagina.${valorSelecionado}`);
        if (divCorrespondente) {
            divCorrespondente.style.display = 'block';
        }
    }
}

// Atualiza a exibição no carregamento da página
window.addEventListener('DOMContentLoaded', atualizarVisibilidade);

// Atualiza a exibição quando a seleção mudar
pasta_pagina.addEventListener('change', atualizarVisibilidade);