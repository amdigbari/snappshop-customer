import { defineConfig } from 'cypress'
import { findNextPorn } from 'share/src/utils'
import packageJson from './package.json'

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${findNextPorn(packageJson.scripts.dev)}`,
  },
})
