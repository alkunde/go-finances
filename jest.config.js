module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ],

  setupFiles: [
    "./jestSetupFile.js"
  ],

  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: [
    "lcov"
  ],

  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
}