# Project Swag Labs
Projeto desenvolvido durante o Chapter V do Cypress Agilizei Bootcamp.

## 🚀 Conhecendo o desafio proposto
A empresa Stark, precisa garantir que as compras em seu site estão funcionando.

O site é um ​ecommerce​, que você pode acessar em: https://www.saucedemo.com/​

Como estratégia, eles decidiram incluir testes de regressão da jornada de compra do usuário como uma de suas rotinas de desenvolvimento. Nessa jornada, o usuário segue basicamente os seguintes passos:

- efetua login no site
- adiciona um produto ao carrinho
- navega para o carrinho
- avança para o checkout
- informa os dados de nome e endereço
- confirma os dados da compra
- finaliza a compra

Você deve construir um teste automatizado que simule a jornada de compra de um usuário.
Crie um novo projeto, faça as configurações e desenvolva os scripts de testes.

**Importante**
- Os testes devem passar, mesmo executando várias vezes
- Utilize o Mochawesome como Relatório

No README de seu projeto, adicione: descrição, GIF da execução e como executar
Adicione asserções ao seu teste
Adicione o arquivo .gitignore
Adicione a execução no Github Actions
Adicione a integração do relatório com o Github Pages



### 📋 Pré-requisitos
- [Node](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/)

### 🔧 Instalação
Após a instalação dos pré-requisitos, para utilizar este projeto, primeiramente deve-se seguir os seguintes passos:

Clonar projeto Git
```
git clone https://github.com/mayconnoetzold/prjSwagLabs.git
```
## ⚙️ Executando os testes
- Caso desejar executar os testes em modo headless deve-se utilizar o seguinte script:
```
npx cypress run
```
- Para abrir o test runner:
```
npx cypress open
```
## 🛠️ Construído com

* [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework

## 📃 Relatório de execução dos testes
Utiliza-se os scripts para geração do relatório de execução dos testes:
```
npm run report:mocha
npm run report:merge
```
* [Acesse aqui o relatório gerado](https://mayconnoetzold.github.io/prjSwagLabs/)

## ✒️ Autores
* **QA Tester** - *Desenvolvimento do teste automatizado* - [Maycon Noetzold](https://github.com/mayconnoetzold)
* **Samuel Lucas - Agilizei Bootcamp** - *Requisitos do projeto* - [Samuel Lucas](https://github.com/samlucax)
---
