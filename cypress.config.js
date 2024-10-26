const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.USER_EMAIL = process.env.USER_EMAIL
      config.env.USER_PASSWORD = process.env.USER_PASSWORD
      config.env.ADMIN_EMAIL = process.env.ADMIN_EMAIL
      config.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

      return config
      // implement node event listeners here
    },
  },
});