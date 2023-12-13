// Função para gerar um número da mesa
function generateSequentialNumber() {
    let lastNumber = parseFloat(localStorage.getItem('lastNumber')) || 0;
    const currentNumber = lastNumber + 1;

    // Atualizar o número na tela
    document.getElementById('numero').innerText = currentNumber.toFixed(1);

    // Armazenar o último número gerado no localStorage
    localStorage.setItem('lastNumber', currentNumber);
}

// Função para zerar o número ao fechar a tela
function clearNumberOnUnload() {
    localStorage.removeItem('lastNumber');
}

// Chamar a função para gerar o número sequencial
generateSequentialNumber();

// Adicionar um ouvinte para o evento unload (ao fechar a janela ou aba)
window.addEventListener('unload', clearNumberOnUnload);

function adicionarPedido() {
    const numeroMesa = document.getElementById('numero').innerText;
    const checkboxes = document.querySelectorAll('.pedido-checkbox:checked');
    const quantidadeInputs = document.querySelectorAll('.quantidade-pedido');

    // Limpar pedidosContainer antes de adicionar novos pedidos
    const pedidosContainer = document.getElementById('pedidos-container');
    pedidosContainer.innerHTML = `<h1>PEDIDOS - Mesa ${numeroMesa}</h1>`;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const quantidade = quantidadeInputs[index].value || 1;
            const valor = checkbox.value;
            const textoPedido = checkbox.parentNode.innerText.trim();
            const total = quantidade * valor;
            const novoPedido = document.createElement('p');
            novoPedido.textContent = `${quantidade}x ${textoPedido}....................Total: ${total} R$`;
            pedidosContainer.appendChild(novoPedido);

            // Exibir no console
            console.log(`Mesa ${numeroMesa}: ${quantidade}x ${textoPedido}      Total: ${total} R$`);
        }
    });
}