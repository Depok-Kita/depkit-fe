module.exports = {
  // Run type-check on changes to TypeScript files

  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => `yarn lint . ${filenames.join(" ")}`,
};
