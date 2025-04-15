const baseURL = 'http://127.0.0.1:8000/clientes/'
const resposta = document.getElementById('resposta')

let clienteJson

async function getCliente() {
    const cpf = document.getElementById('cpf').value
    console.log(cpf)
    try {
        const cliente = await fetch(baseURL + cpf, {
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            },
            mode:"cors",
        })
        clienteJson = await cliente.json();
        console.log(clienteJson);
        
        if (clienteJson.status === 'ativo') {
            resposta.innerHTML = `Seja Bem-Vindo ${clienteJson.nome}! Bom treino!`
        }  

        else if (!clienteJson.cpf) {
            resposta.innerHTML = `CPF inválido!`
        }

        else {
            resposta.innerHTML = `Cliente não ativo, por favor consulte a secretaria da academia!`
        }
    }
    catch (error) {
        console.log("Erro ao chamar a API:" + error)
    }
}

function adicionarnum(num) {
    const display = document.getElementById('cpf')
    display.value += num
}

function deleteNum() {
    const display = document.getElementById('cpf');
    display.value = display.value.slice(0, -1);
  }
    