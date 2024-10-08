markdown

# 🎨 Calculadora Científica em Angular

![Calculadora](https://img.shields.io/badge/Calculadora-Scientific-green?style=for-the-badge&logo=angular&logoColor=white)

## 📋 Visão Geral

Bem-vindo ao projeto de **Calculadora Científica**! Este é um projeto de uma calculadora desenvolvida em **Angular**, que oferece uma interface moderna e rica em funcionalidades, permitindo realizar cálculos matemáticos e científicos complexos.

## 🚀 Funcionalidades

- **Operações Matemáticas Básicas**: Adição, Subtração, Multiplicação, Divisão.
- **Funções Científicas**: Potência, Raiz Quadrada, Logaritmo, Funções Trigonométricas e mais.
- **Manipulação de Parênteses**: Suporte para expressões complexas.
- **Tratamento de Erros**: Mensagens de erro para operações inválidas.
- **Interface Estilizada**: Design moderno com gradientes, efeitos visuais e animações.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework para construção da aplicação.
- **CSS/SCSS**: Estilização da interface, incluindo gradientes e efeitos visuais.
- **MathJS API**: Para cálculos matemáticos e científicos.

## 📁 Estrutura do Projeto

```plaintext
/src
  /app
    /components
      calculator.component.html
      calculator.component.scss
      calculator.component.ts
    /services
      calculator.service.ts
  /assets
  /environments
  index.html
  main.ts
  styles.scss

🛠️ Configuração
Instalação

Clone o repositório e instale as dependências:

bash

git clone <URL do repositório>
cd <nome-do-repositório>
npm install

Executar a Aplicação

Inicie o servidor de desenvolvimento:

bash

ng serve

A aplicação estará disponível em http://localhost:4200.
🧪 Testes E2E com Cypress
Instalação do Cypress

Instale o Cypress como uma dependência de desenvolvimento:

bash

npm install cypress --save-dev

Configuração do Cypress

Crie um arquivo de teste E2E em cypress/e2e/calculator_spec.cy.js com o seguinte conteúdo:

javascript

describe('Calculator Component Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display initial value correctly', () => {
    cy.get('.display').should('have.text', '');
  });

  it('Should append digits to the display', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('.display').should('have.text', '78');
  });

  it('Should perform addition correctly', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '10');
  });

  it('Should perform subtraction correctly', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '5');
  });

  it('Should perform multiplication correctly', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '30');
  });

  it('Should perform division correctly', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '4');
  });

  it('Should perform scientific operations correctly', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('^').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '8');

    cy.get('button').contains('sqrt').click();
    cy.get('button').contains('9').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '3');

    cy.get('button').contains('log').click();
    cy.get('button').contains('100').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '2');
  });

  it('Should handle parentheses correctly', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('(').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '14');
  });

  it('Should handle invalid expressions gracefully', () => {
    cy.get('button').contains('7').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', 'Error');
  });

  it('Should handle scientific functions with parentheses', () => {
    cy.get('button').contains('pow').click();
    cy.get('button').contains('(').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(',').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '8');
  });
});

Executar os Testes

Inicie o Cypress Test Runner:

bash

npx cypress open

Selecione e execute os testes na interface gráfica do Cypress.
✨ Estilização da Calculadora

A calculadora foi estilizada para oferecer uma interface moderna e agradável. Utilizamos gradientes, efeitos de hover e animações para criar uma experiência visualmente atraente.
Estilização com CSS/SCSS

scss

/* Calculadora Geral */
.calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    margin: 50px auto;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    background: linear-gradient(145deg, #f0f0f0, #ffffff);
    color: #333;
}

/* Display */
.display {
    width: 100%;
    padding: 15px;
    font-size: 2em;
    text-align: right;
    background: #4a90e2;
    color: #fff;
    border-bottom: 2px solid #007bff;
    box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 12px 12px 0 0;
}

/* Botões */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: #e0e0e0;

    button {
        padding: 20px;
        font-size: 1.2em;
        background: #ffffff;
        border: none;
        color: #333;
        cursor: pointer;
        transition: 
            background 0.3s ease,
            transform 0.1s ease,
            box-shadow 0.3s ease;

        &:hover {
            background: #f8f8f8;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        &:active {
            background: #e0e0e0;
            transform: scale(0.98);
        }

        &.operator {
            background: #ff9f00;
            color: #fff;

            &:hover {
                background: #ff8c00;
            }
        }

        &.clear {
            background: #ff3b30;
            color: #fff;

            &:hover {
                background: #e53935;
            }
        }

        &.equals {
            background: #007bff;
            color: #fff;

            &:hover {
                background: #0056b3;
            }
        }
    }
}

/* Efeitos de Fumaça */
button:active {
    position: relative;
}

button:active::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: smoke 0.3s ease-out;
}

@keyframes smoke {
    0% {
        opacity: 0.5;
        transform: scale(0.5);
    }
    100% {
        opacity: 0;
        transform: scale(1.5);
    }
}

📘 Documentação da API

A calculadora utiliza a MathJS API para realizar cálculos matemáticos e científicos. A API foi projetada para fornecer uma ampla gama de funções matemáticas, e os cálculos complexos são traduzidos para uma forma simples para garantir compatibilidade.
Exemplos de Uso da API

    Cálculo Simples: ?expr=2+2 retorna 4
    Funções Científicas: ?expr=sqrt(16) retorna 4
    Funções com Parênteses: ?expr=(2+3)*4 retorna 20

📝 Contribuindo

Se desejar contribuir para este projeto, siga estes passos:

    Faça um fork do repositório.
    Crie uma branch para suas alterações (git checkout -b feature-nome).
    Faça suas alterações e adicione um commit (git commit -am 'Adiciona nova funcionalidade').
    Envie a branch para o repositório remoto (git push origin feature-nome).
    Abra um pull request no GitHub.
