const fs = require("fs");

function generateGraph(filename) {
    const graph = {};

    const file = fs.readFileSync(filename).toString();

    const lines = file.split("\n");
    lines.pop()
    lines.forEach((line, idx) => {
        const values = line.split(",").map(v => parseInt(v.trim()));
        const adjacencies = [];
        values.forEach((value, idx) => {
            if (value) {
                adjacencies.push(idx);
            }
        })

        graph[idx] = adjacencies;
    });

    return graph;
}

module.exports = generateGraph;
