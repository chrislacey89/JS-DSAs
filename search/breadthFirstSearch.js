export class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // O(V + E) time | O(V) space
  // V - number of vertices in the graph
  // E - number of edges in the graph
  // Data structure Used: Queue
  breadthFirstSearch() {
    let currentNode = this;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.name);
      if (currentNode.children.length) {
        for (const child of currentNode.children) {
          queue.push(child);
        }
      }
    }
    return list;
  }
  
  // O(V + E) time | O(V) space
  // V - number of vertices in the graph
  // E - number of edges in the graph
  // Data structure Used: Queue
  breadthFirstSearchR(queue, list) {
    if (!queue.length) return list;
    const currentNode = queue.shift();
    list.push(currentNode.name);
    if (currentNode.children.length) {
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
    return this.breadthFirstSearchR(queue, list);
  }
}
// Test for graph
const graph = new Node("A");
graph.addChild("B").addChild("C").addChild("D");
graph.children[0].addChild("E").addChild("F");
graph.children[2].addChild("G").addChild("H");
graph.children[0].children[1].addChild("I").addChild("J");
graph.children[2].children[0].addChild("K");
console.log(JSON.stringify(graph));
console.log(graph.breadthFirstSearch());
console.log(graph.breadthFirstSearchR([graph], []));
// ! Expected Output
// [
//   'A', 'B', 'E', 'F',
//   'I', 'J', 'C', 'D',
//   'G', 'K', 'H'
// ]

// Example graph that is generated from code above:
const graphToSearch = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "E",
          children: [],
        },
        {
          name: "F",
          children: [
            {
              name: "I",
              children: [],
            },
            {
              name: "J",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "C",
      children: [],
    },
    {
      name: "D",
      children: [
        {
          name: "G",
          children: [
            {
              name: "K",
              children: [],
            },
          ],
        },
        {
          name: "H",
          children: [],
        },
      ],
    },
  ],
};
