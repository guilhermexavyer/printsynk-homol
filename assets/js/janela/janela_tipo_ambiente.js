function janelaTipoAmbiente() {
    // Dimensões da nova janela (quadrada)
    const dimensao = 700; // Janela será 600x600

    // Dimensões totais da tela (considerando o monitor atual)
    const larguraTela = window.screen.availWidth; // Largura disponível do monitor
    const alturaTela = window.screen.availHeight; // Altura disponível do monitor

    // Calculando o centro absoluto no monitor
    const esquerda = (larguraTela - dimensao) / 2;
    const topo = (alturaTela - dimensao) / 2;

    // Configurações da nova janela
    const config = `width=${dimensao},height=${dimensao},top=${Math.max(topo, 0)},left=${Math.max(esquerda, 0)},resizable=no,scrollbars=no,status=no`;

    // Abrir a nova janela
    window.open('janela/janela_tipo_ambiente.html', 'TipoAmbiente', config);

    // Prevenir o comportamento padrão do link
    return false;
}
