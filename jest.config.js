module.exports = {
  roots: [
    "./tests"
  ],
  transform: { "^.+\\.tsx?$": "ts-jest" },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
  ],
  globals: {
    'ts-jest': {
      tsConfig: "./tests/tsconfig.json",
    }
  }
  // preset: "ts-jest"
}
