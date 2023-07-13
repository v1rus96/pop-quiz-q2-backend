class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // inorder traversal
  inorder() {
    return this.inorderTraversal(this.root, []);
  }

  inorderTraversal(node, result) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // preorder traversal
  preorder() {
    return this.preorderTraversal(this.root, []);
  }

  preorderTraversal(node, result) {
    if (node !== null) {
      result.push(node.data);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
    return result;
  }

  // postorder traversal
  postorder() {
    return this.postorderTraversal(this.root, []);
  }

  postorderTraversal(node, result) {
    if (node !== null) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.data);
    }
    return result;
  }
}

module.exports = {
  BinaryTree,
  Node,
};
