import { defineConfig } from 'cypress'
import { findNextPort } from 'utils/src/utils'
import packageJson from './package.json'

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${findNextPort(packageJson.scripts.dev)}`,
  },
})
