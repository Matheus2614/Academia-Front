const baseURL = 'http://10.142.227.101:8000/clientes/'
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
            resposta.innerHTML = `<h3><strong>Seja Bem-Vindo ${clienteJson.nome}!</strong></h3><h5>Bom treino!</h5>`

        }  

        else if (!clienteJson.cpf) {
            resposta.innerHTML = `<h2><strong>CPF inválido ou não cadastrado!</strong></h2>`
        }

        else if (clienteJson.status === 'inativo') {
            resposta.innerHTML = `<h3><strong>Cliente não ativo!</h3><h4>Consulte a secretaria.</strong></h3>`
        }

        setTimeout(() => {
            document.getElementById('cpf').value = '';
            document.getElementById('cpf').classList.remove('sucesso', 'erro');
        }, 2000);

    }
    catch (error) {
        console.log("Erro ao chamar a API:" + error)
        resposta.innerHTML = `Erro no sistema!`

        setTimeout(() => {
            document.getElementById('cpf').value = '';
            document.getElementById('cpf').classList.remove('sucesso', 'erro');
        }, 2000);
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
    