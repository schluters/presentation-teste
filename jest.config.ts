// const { pathsToModuleNameMapper } = require("ts-jest/utils");
// const { compilerOptions } = require("./tsconfig");

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
//     prefix: "<rootDir>/",
//   }),
// };
export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["**/**/*.spec.ts"],
};
