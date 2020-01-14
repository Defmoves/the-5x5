const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  roots: ["<rootDir>/src/"],
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.(jsx?|js?|tsx?|ts?)?$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"]
};
