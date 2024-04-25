import { defineConfig } from 'cypress'


export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {},
    viewportHeight: 1080,
    viewportWidth: 1527,
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
})

