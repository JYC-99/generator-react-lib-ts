module.exports = {
  setupFiles: [
    '<rootDir>/setupTests.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: [
    '/node_modules/(?!(office-ui-fabric-react))'
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
  ],
};