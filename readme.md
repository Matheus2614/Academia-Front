# SENAI - Curso Técnico em Desenvolvimento de Sistemas

![Imagem de capa](/gifs/WR%20FIT-ADM.gif)

**Descrição:**

Este projeto disponibiliza uma interface web de autoatendimento (totem) para validação de CPF de clientes em academias. Desenvolvido com HTML, CSS (Bootstrap) e JavaScript, o sistema se conecta a uma API externa para verificar o status do cliente, exibindo mensagens personalizadas de boas-vindas ou alertas caso o CPF esteja inativo ou inválido. A interface é responsiva, acessível e intuitiva para uso direto por alunos ou frequentadores da academia.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração da API](#configuração-da-api)
  - [Execução do Front-end](#execução-do-front-end)
- [API (Backend)](#api-backend)
- [Autores](#autores)
- [Licença](#licença)

---

## Funcionalidades

- **Validação de CPF:** O cliente digita seu CPF no totem e o sistema verifica se está cadastrado e ativo.
- **Mensagem Personalizada:** Exibe mensagens de boas-vindas se o cliente estiver ativo ou orientações caso esteja inativo ou não cadastrado.
- **Interface Numérica (Numpad):** Permite digitação via tela sensível ao toque, facilitando o uso sem teclado físico.
- **Limpeza automática:** Após 5 segundos, a interface limpa os dados para o próximo usuário.
- **Design responsivo com Bootstrap:** Compatível com diversos tamanhos de tela.

---

## Tecnologias Utilizadas

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Como Executar

### Pré-requisitos

- Navegador web moderno (Google Chrome, Firefox, Edge)
- API de clientes em execução (ver próximo passo)

### Configuração da API

1. **Clone o repositório da API:** [Academia-API](https://github.com/Matheus2614/Academia-API.git)
2. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` com a chave do Firebase em formato JSON.

4. **Execute a API:**

   ```bash
   python app.py
   ```

### Execução do Front-end

1. **Clone este repositório ou copie os arquivos:**
   - `index.html`
   - `style.css`
   - `script.js`

2. **Abra o arquivo `index.html` em um navegador web.**

3. **Certifique-se de que o link da API no arquivo `script.js` está correto:**

   ```js
   const baseURL = 'https://academia-api-xi.vercel.app/clientes/';
   ```

---

## API (Backend)

Para maiores detalhes, acesse o repositório da API: [Academia API](https://github.com/Matheus2614/Academia-API.git)

### Endpoint Utilizado

#### `GET /clientes/<cpf>`

- Retorna os dados do cliente com base no CPF fornecido.

**Exemplo de resposta:**

```json
{
  "nome": "João da Silva",
  "cpf": "12345678901",
  "status": "ativo"
}
```

---

## Autores

- [Richard](https://github.com/Richard15151) - richard.oliveira.senai@gmail.com  
- [Matheus](https://github.com/Matheus2614) - matheuss.wincler.senai@gmail.com

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.