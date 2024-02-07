import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", {
      tsconfig: "tsconfig.test.json"
    }]
  },
  globals: {
    cob: null
  },
  moduleNameMapper: {
    "^@cob/cobjs-api-(.*)$": "<rootDir>/packages/$1/src"
  }
};

export default config;
