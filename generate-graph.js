const fs = require("fs");

/**
 * Essa função irá ler um arquivo .csv que contém uma matriz de adjacência
 * retornando o grafo equivalente na estrutura de um objeto
 * @param {string} filename
 * @returns
 */
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
