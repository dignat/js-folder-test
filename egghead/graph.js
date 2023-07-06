// Graphs
// acollection of nodes aka vertices
// Nodes may point to another nodes, known as edges
function createQueue() {
    const queue = []
    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        },
        print() {
            for (let i of queue) {
                console.log(i)
            }
        }
    }
}
function createNode(key) {
    const neighbours = []

    return {
        key,
        neighbours,
        addNeighbour(node) {
            neighbours.push(node)
        }
    }
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = []
    return {
        directed,
        nodes,
        edges,
        addNode(key) {
            nodes.push(createNode(key));
        },
        getNode(key) {
            return nodes.find(node => node.key === key);
        },
        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            node1.addNeighbour(node2);
            edges.push(`${node1key} - ${node2key}`)

            if (!directed) {
                node2.addNeighbour(node1);
            }
        },
        print() {
            return nodes.map(({key, neighbours}) => {
                let result = key;
                if (neighbours.length) {
                    result += ` => ${neighbours.map(neighbour => neighbour.key).join(' ')}`
                }
                return result;
            }).join('\n');
        },
        breadhFirstSearch(startingKey, visitFn) {
            const startingNode = this.getNode(startingKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            }, {});
            const queue = createQueue();
            queue.enqueue(startingNode);
        
            while(!queue.isEmpty()) {
                const currentNode = queue.dequeue();
        
                if (!visited[currentNode.key]) {
                    visitFn(currentNode);
                    visited[currentNode.key] = true;
                }
                currentNode.neighbours.forEach(node => {
                    if (!visited[node.key]) {
                        queue.enqueue(node);
                    }
                })
            }
        },
        depthFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey);
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false;
                return acc;
            }, {});

            function explore(node) {
                if (visited[node.key]) {
                    return;
                }
                visitFn(node)
                visited[node.key] = true;
                node.neighbours.forEach(node => {
                    explore(node);
                });
            
            }
            explore(startingNode);
        }
 }
}

const graph = createGraph(true);

graph.addNode('Eliz');
graph.addNode('Mama');
graph.addNode('Tate');

graph.addEdge('Mama', 'Eliz');
graph.addEdge('Tate', 'Eliz');
graph.addEdge('Eliz', 'Mama');
graph.addEdge('Eliz', 'Tate');
graph.addEdge('Mama', 'Tate');


console.log(graph.print());

//breadh first search



const graph1 = createGraph(true);
const nodes = ['a', 'b', 'c', 'd', 'e','f'];
const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e']
];

nodes.forEach(node => {
    graph1.addNode(node)
})

edges.forEach(nodes => {
    graph1.addEdge(...nodes)
});

graph1.breadhFirstSearch('a', node => {
    console.log(node.key)
});

// depth first search
console.log('..............')
graph1.depthFirstSearch('a', node => {
    console.log(node.key)
})

