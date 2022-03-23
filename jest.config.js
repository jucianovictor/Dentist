const { defaults } = require('jest-config');

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
