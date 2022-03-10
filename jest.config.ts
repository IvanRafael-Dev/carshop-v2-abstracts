/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './tests',
  setupFilesAfterEnv: ['./setup.js'],
  testSequencer: './testSequencer.js',
  testTimeout: 100000,
};