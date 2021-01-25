//Grafo
/*
	 2 - 0
  / \
 1 - 3
*/

//Edge List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//Adjacent List
//            ===== INDICES =====
//              0    1       2          3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Forma objeto (tambien se puede representar en hash table)
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

//Adjacent Matrix
const graph = [
  // ==== NODOS ====
  // 1  2  3  4
  [0, 0, 1, 0], // 0
  [0, 0, 1, 1], // 1
  [1, 1, 0, 1], // 2
  [0, 1, 1, 0], // 3
];

// Forma objeto
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
