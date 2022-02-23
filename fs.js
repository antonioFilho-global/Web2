const fs = require('fs');

async function leitura() {
    try {
        const dados = await fs.readFileSync('./jason2.json', 'utf-8');
        const dadosJson = await JSON.parse(dados);
        dadosJson.forEach (dadoAtual) => {
            console.log(dadoAtual.tempo);
        } );
    } catch(error) {
            console.log("Erro na leitura do json");
        }
    }
}

leitura();