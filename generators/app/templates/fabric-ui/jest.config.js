module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  transformIgnorePatterns: [
    '/node_modules/(?!(office-ui-fabric-react))'
  ],
  setupFiles: [
    '<rootDir>/setupTests.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer']
};