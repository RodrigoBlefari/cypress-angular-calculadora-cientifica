describe("Calculator Component Tests", () => {
  const baseUrl = Cypress.config("baseUrl");
  beforeEach(() => {
    // Acessa a aplicação
    cy.visit(baseUrl);
  });

  it("Should display initial value correctly", () => {
    // Verifica se o display está vazio no início
    cy.get(".display").should("have.text", "");
  });

  it("Should append digits to the display", () => {
    // Verifica se os dígitos são exibidos corretamente
    cy.get("button").contains("7").click();
    cy.get("button").contains("8").click();
    cy.get(".display").should("have.text", "78");
  });

  it("Should perform addition correctly", () => {
    // Testa a operação de adição
    cy.get("button").contains("7").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("=").click();
    cy.get(".display").should("have.text", "10");
  });

  it("Should clear the display when C is clicked", () => {
    // Verifica se o botão C limpa o display
    cy.get("button").contains("7").click();
    cy.get("button").contains("C").click();
    cy.get(".display").should("have.text", "");
  });

  it("Should handle division by zero gracefully", () => {
    // Testa como a calculadora lida com divisão por zero
    cy.get("button").contains("8").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get(".display").should("have.text", "Error"); // Verifica se o resultado é "Error"
  });

  it("Should handle invalid expressions gracefully", () => {
    // Testa como a calculadora lida com expressões inválidas
    cy.get("button").contains("7").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get(".display").should("have.text", "Error"); // Verifica se o resultado é "Error"
  });
});
