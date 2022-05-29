module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    'src/hooks/**/*.ts(x)?',
    'src/contexts/**/*.ts(x)?',
    'src/pages/**/*',
    '!src/pages/api/**/*',
    '!src/pages/_document.tsx',
    '!src/pages/_app.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
}
