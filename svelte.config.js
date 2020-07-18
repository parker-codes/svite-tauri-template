const { postcss } = require('svelte-preprocess');

module.exports = {
  extensions: ['.svelte'],
  preprocess: [postcss()],
};
