const { defineConfig } = require("cypress");
// require ('dotenv').config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
  // env: {
  //   admin_user: process.env.ADMIN_USER,
  //   admin_password: process.env.ADMIN_PASSWORD,
  // }
});
