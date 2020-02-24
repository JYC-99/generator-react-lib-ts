module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "./coverage",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./test-result",
        outputName: "test-results.xml"
      }
    ]
  ],
  setupFiles: ["<rootDir>/config/setupTests.ts"],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
};
