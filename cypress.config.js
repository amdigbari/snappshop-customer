import { defineConfig } from 'cypress'
const packageJson = require('./package.json')

const portArr = /--port ([0-9]{1,4})/.exec(packageJson.scripts.dev)
const port = portArr[portArr.length - 1]

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${port}`,
  },
})
