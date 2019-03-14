const path = require('path');


module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json'
  ],
  setupTestFrameworkScriptFile: path.join(__dirname, '/node_modules/@stencil/core/testing/jest.setuptestframework.js'),
  testEnvironment: path.join(__dirname, '/node_modules/@stencil/core/testing/jest.environment.js'),
  testPathIgnorePatterns: [
    '/.stencil',
    '/dist',
    '/node_modules',
    '/www'
  ],
  testRegex: '/src/.*\\.(spec|e2e)\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.(ts|tsx)$': path.join(__dirname, '/node_modules/@stencil/core/testing/jest.preprocessor.js')
  }
};
