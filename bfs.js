/**
 * Implementação do Breadth-First Search
 * @param {*} graph
 * @param {*} src
 * @param {*} dest
 */
function bfs(graph = {}, src, dest) {
    const queue = [src];
    const visited = new Set();

    while (queue.length) {
        const vertex = queue.shift();

        if (visited.has(vertex)) continue;

        visited.add(vertex);

        if (vertex === dest) {
            return true;
        }

        const neighbors = graph[vertex];
        queue.push.apply(queue, neighbors);
    }
    return false;
}

module.exports = bfs;
