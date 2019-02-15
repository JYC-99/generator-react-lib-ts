module.exports = {
  preset: 'ts-jest',
  setupFiles: [
    '<rootDir>/setupTests.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
  ],
};