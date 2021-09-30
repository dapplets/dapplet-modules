/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    Core: {
      starterOverlay: () => {}
    },
    Inject: () => () => {},
    Injectable: () => () => {}
  }
};