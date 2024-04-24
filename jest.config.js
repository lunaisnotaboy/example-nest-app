/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: ['**/*.(j|t)s'],
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1'
  },
  rootDir: './src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(j|t)s$': 'ts-jest'
  }
}

module.exports = config
