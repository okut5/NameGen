const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.cy.{js,jsx,ts,tsx}', // Match all files in the e2e directory
    supportFile: false , // Include directory path for e2e support file
    // Other e2e-specific configurations if needed
  },
  component: {
    specPattern: '**/*', // Match all files in the component directory
    supportFile: false, // Include directory path for component support file
    // Other component-specific configurations if needed
  },
});
