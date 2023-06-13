async function obterCSGO() {
    try {
        const response = await fetch(`/medidas/CSGO/`);
        if (response.ok) {
            const resposta = await response.json();
            console.log(`Dados recebidos para CSGO: ${JSON.stringify(resposta)}`);
            return parseInt(resposta[0]['SUM(fk_modalidade_favorita)']);
        } else {
            console.error('Nenhum dado encontrado ou erro na API para CSGO');
            return 0; // Valor padrão em caso de erro
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados de CSGO: ${error.message}`);
        return 0; // Valor padrão em caso de erro
    }
}

async function obterVL() {
    try {
        const response = await fetch(`/medidas/VL/`);
        if (response.ok) {
            const resposta = await response.json();
            console.log(`Dados recebidos para Valorant: ${JSON.stringify(resposta)}`);
            return parseInt(resposta[0]['SUM(fk_modalidade_favorita)']);
        } else {
            console.error('Nenhum dado encontrado ou erro na API para Valorant');
            return 0; // Valor padrão em caso de erro
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados de Valorant: ${error.message}`);
        return 0; // Valor padrão em caso de erro
    }
}

async function obterRL() {
    try {
        const response = await fetch(`/medidas/RL/`);
        if (response.ok) {
            const resposta = await response.json();
            console.log(`Dados recebidos para Rocket League: ${JSON.stringify(resposta)}`);
            return parseInt(resposta[0]['SUM(fk_modalidade_favorita)']);
        } else {
            console.error('Nenhum dado encontrado ou erro na API para Rocket League');
            return 0; // Valor padrão em caso de erro
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados de Rocket League: ${error.message}`);
        return 0; // Valor padrão em caso de erro
    }
}

async function obterAPEX() {
    try {
        const response = await fetch(`/medidas/APEX/`);
        if (response.ok) {
            const resposta = await response.json();
            console.log(`Dados recebidos para Apex Legends: ${JSON.stringify(resposta)}`);
            return parseInt(resposta[0]['SUM(fk_modalidade_favorita)']);
        } else {
            console.error('Nenhum dado encontrado ou erro na API para Apex Legends');
            return 0; // Valor padrão em caso de erro
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados de Apex Legends: ${error.message}`);
        return 0; // Valor padrão em caso de erro
    }
}
async function obterLOL() {
    try {
        const response = await fetch(`/medidas/LOL/`);
        if (response.ok) {
            const resposta = await response.json();
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
            return parseInt(resposta[0]['SUM(fk_modalidade_favorita)']);
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            return 0; // Retornar um valor padrão em caso de erro
        }
    } catch (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        return 0; // Retornar um valor padrão em caso de erro
    }
}

async function criarGrafico() {
    const valorLOL = await obterLOL();
    const valorCSGO = await obterCSGO();
    const valorVL = await obterVL();
    const valorRL = await obterRL();
    const valorAPEX = await obterAPEX();
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CSGO', 'Valorant', 'LOL', 'APEX', 'Rocket league'],
            datasets: [{
                label: 'Jogo favorito',
                data: [valorCSGO,valorVL,valorLOL,valorAPEX,valorRL], // Atualizar os valores do gráfico conforme necessário
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
criarGrafico()