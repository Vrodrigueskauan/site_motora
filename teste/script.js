// Função de inicialização do rastreamento ocular
window.onload = function() {
    // Configura o WebGazer
    webgazer.setRegression('ridge').setTracker('clmtrackr').setGazeListener(gazeListener).begin();

    // Variável para armazenar a última posição de gaze
    let lastGaze = { x: 0, y: 0 };

    // Função para lidar com a detecção do movimento dos olhos
    function gazeListener(data, elapsedTime) {
        if (data == null) return;

        // Atualiza a posição do gaze
        lastGaze = { x: data.x, y: data.y };

        // Verifica se o gaze está sobre algum botão
        checkButtonSelection();
    }

    // Função para verificar se o usuário está olhando para um botão
    function checkButtonSelection() {
        const buttons = document.querySelectorAll('button');
        const statusDiv = document.getElementById('status');
        let selectedButton = null;

        buttons.forEach((button) => {
            const rect = button.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;

            // Calcula a distância entre a posição do gaze e o centro do botão
            const distance = Math.sqrt(
                Math.pow(lastGaze.x - buttonCenterX, 2) + Math.pow(lastGaze.y - buttonCenterY, 2)
            );

            // Se a distância for pequena o suficiente, destacamos o botão
            if (distance < 100) {
                selectedButton = button;
                button.classList.add('selected');
            } else {
                button.classList.remove('selected');
            }
        });

        // Exibe status de calibração ou seleção
        if (selectedButton) {
            statusDiv.innerText = "Você está olhando para: " + selectedButton.textContent;
            // Se olhar para o botão por 2 segundos (tempo de "dwell"), simula um clique
            setTimeout(() => {
                if (selectedButton.classList.contains('selected')) {
                    selectedButton.click();
                }
            }, 2000);  // Espera 2 segundos
        } else {
            statusDiv.innerText = "Aguardando gaze em um botão...";
        }
    }

    // Função para lidar com o clique dos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Botão "' + button.textContent + '" foi selecionado!');
        });
    });
};
