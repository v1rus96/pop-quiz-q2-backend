# Binary Tree Traversal in Node.js (POP-QUIZ-REGOV)

This project provides a simple yet powerful Node.js implementation of a binary tree data structure and the common tree traversal methods - inorder, preorder, and postorder.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js

### Installing

1. Clone the repository:
```https://github.com/v1rus96/pop-quiz-q2-backend.git```

2. Navigate into the project directory:
```cd pop-quiz-q2-backend```

3. Install the dependencies:
```npm install```

## Usage

```javascript
const { BinaryTree } = require('./BinaryTree'); // Make sure the path is correct

// Create a new Binary Tree
const binaryTree = new BinaryTree();

// Insert elements into the tree
binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(14);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(13);

// Perform traversals
console.log('Inorder traversal: ', binaryTree.inorder());  // [1, 3, 4, 6, 7, 8, 10, 13, 14]
console.log('Preorder traversal: ', binaryTree.preorder()); // [8, 3, 1, 6, 4, 7, 10, 14, 13]
console.log('Postorder traversal: ', binaryTree.postorder()); // [1, 4, 7, 6, 3, 13, 14, 10, 8]
```

## Running the tests
This project uses the Jest testing framework. To run the tests:
```npm test```

