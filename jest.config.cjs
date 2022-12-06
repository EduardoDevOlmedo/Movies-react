module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      "^.+\\.svg$": "<rootDir>/svgTransform.cjs" 
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};