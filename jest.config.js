const nextJest = require('next/jest')
const customConfig = require('test-config/next-jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  ...customConfig,
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  moduleNameMapper: {
    '^@design/(.*)$': '<rootDir>../../packages/design/src/$1',
    '^@utils/(.*)$': '<rootDir>../../packages/utils/src/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
