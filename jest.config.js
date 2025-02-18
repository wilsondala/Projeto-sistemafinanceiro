module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)?$' : 'ts-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(@testing-library/jest-dom)/)',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };