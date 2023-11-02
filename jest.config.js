module.exports = {
  // Test files pattern
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  // The directory where Jest should output code coverage reports
  coverageDirectory: 'coverage',

  // Collect coverage from these directories and files
  collectCoverageFrom: [
    '**/HttpTrigger1/*.js', // Adjust the path to match your source code
    '!**/HttpTrigger1/index.js'
  ],

  // Reporters
  coverageReporters: ['text', 'lcov'],

  // Thresholds for code coverage
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
