/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './__tests__',
  setupFilesAfterEnv: ['./setup.js'],
  testSequencer: './testSequencer.js',
  testTimeout: 100000,
  modulePathIgnorePatterns: ["<rootDir>/utils", "<rootDir>/sources"]
};