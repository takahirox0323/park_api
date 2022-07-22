module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@controllers(.*)$": "<rootDir>/src/controllers/$1",
    "^@entities(.*)$": "<rootDir>/src/entities/$1",
    "^@repositories(.*)$": "<rootDir>/src/repositories/$1",
    "^@routes(.*)$": "<rootDir>/src/routes/$1",
    "^@services(.*)$": "<rootDir>/src/services/$1",
    "^@Types(.*)$": "<rootDir>/src/types/$1",
  },
};
