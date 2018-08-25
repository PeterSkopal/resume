module.exports = {
  verbose: false,
  preset: 'jest-preset-angular',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: 'src/tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  transform: {
    '^.+\\.(ts|js|html)$':
      '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/src/jest.ts',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['none'],
  moduleNameMapper: {
    '@audience/(.*)': '<rootDir>/src/app/audience/$1',
    '@main/(.*)': '<rootDir>/src/app/main/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@utils/(.*)': '<rootDir>/src/app/utils/$1',
    '@envs/(.*)': '<rootDir>/src/environments/$1',
    '@email/(.*)': '<rootDir>/src/app/email/$1',
    '@editor/(.*)': '<rootDir>/src/app/content-editor/$1',
    '@events/(.*)': '<rootDir>/src/app/events/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@capture/(.*)': '<rootDir>/src/app/capture/$1',
    '@sms/(.*)': '<rootDir>/src/app/sms/$1',
    '@automation/(.*)': '<rootDir>/src/app/automation/$1',
    '@automationcanvas/(.*)': '<rootDir>/src/app/automation-canvas/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@apsis|angular-svg-icon|@ngrx)/)',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  collectCoverageFrom: ['src/app/**/*.ts'],
};
