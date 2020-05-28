const generateGraph = require("./generate-graph");
const bfs = require("./bfs");
const dfs = require("./dfs");

const graph = generateGraph("graph-adjacency-matrix-example.csv");

console.log(bfs(graph, 16, 5)) // true
console.log(bfs(graph, 16, 199)) // false
console.log(dfs(graph, 16, 5)) // true
console.log(dfs(graph, 16, 199)) //false
