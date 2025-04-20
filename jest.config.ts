/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ['src/**/*.ts', 'library/**/*.ts'],
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  slowTestThreshold: 2,
  testEnvironment: "node",
  testPathIgnorePatterns: [`<rootDir>/node_modules/`],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};

export default config;
