const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on: any, _config: any) {
      // Aqui você pode configurar eventos do Cypress, se necessário
    },
    baseUrl: 'http://localhost:4200', // URL base onde sua aplicação Angular está sendo servida
    supportFile: false, // Desativa o suporte a arquivos de suporte se não for necessário
  },
});
