/**
 * Implementação do Depth-First Search
 * @param {*} graph
 * @param {*} src
 * @param {*} dest
 * @param {*} visited
 */
function dfs(graph = {}, src, dest, visited = new Set()) {
    if (visited.has(src)) return false;

    visited.add(src);

    if (src === dest) return true;

    const children = graph[src];

    for (const child of children) {
        if (dfs(graph, child, dest, visited)) {
            return true;
        }
    }

    return false;
}

module.exports = dfs;
