# Banco API Tests

Projeto de automação de testes de API Rest desenvolvido em **JavaScript**, que valida a API disponível em [Banco API](https://github.com/juliodelimas/banco-api).

## 🎯 Objetivo
Este projeto tem como objetivo validar os principais endpoints da API **Banco API**, contribuindo para a  qualidade e confiabilidade no consumo de seus recursos.

---

## 🛠️ Stack Utilizada
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) - Framework de testes
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções
- [Supertest](https://github.com/ladjs/supertest) - Requisições HTTP para testes
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Relatórios em HTML

---

## 📂 Estrutura de Diretórios

```
banco-api-tests/
├── fixtures/              # Arquivos JSON utilizados nos testes
├── helpers/               # Funções auxiliares (ex: autenticação)
├── mochawesome-report/    # Relatórios gerados pelo mochawesome
├── test/                  # Casos de teste organizados por módulo
├── .env.                  # Variáveis de ambiente
├── package.json           # Dependências e scripts do projeto
```

---

## ⚙️ Configuração do .env

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto:

```bash
BASE_URL=http://localhost:3000
```

- **BASE_URL**: URL base da API que será testada.

---

## ▶️ Execução dos Testes

Instale as dependências:
```bash
npm install
```

Execute os testes:
```bash
npm test
```

Gerar relatório com **Mochawesome**:
```bash
npx mocha test --reporter mochawesome
```

O relatório será salvo no diretório `mochawesome-report/`.

---

## 📖 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## 👨‍💻 Autor
Projeto desenvolvido por [Djalma Melo](https://github.com/djalmamelos).
