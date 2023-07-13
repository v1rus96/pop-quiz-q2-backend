const { BinaryTree } = require('./binary-tree'); // Adjust this according to your file structure

describe('BinaryTree', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
    binaryTree.insert(8);
    binaryTree.insert(3);
    binaryTree.insert(10);
    binaryTree.insert(1);
    binaryTree.insert(6);
    binaryTree.insert(14);
    binaryTree.insert(4);
    binaryTree.insert(7);
    binaryTree.insert(13);
  });

  test('inorder traversal', () => {
    expect(binaryTree.inorder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });

  test('preorder traversal', () => {
    expect(binaryTree.preorder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
  });

  test('postorder traversal', () => {
    expect(binaryTree.postorder()).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
  });
});
