var merge = require("webpack-merge");
var prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API_JSONPLACEHOLDER: '"http://jsonplaceholder.typicode.com"',
  ROOT_API_ROYAL: '"http://api.royalresorts.mobi/index.php"',
  PROJECT: '"Dashboard"'
});
