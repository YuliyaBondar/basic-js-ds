const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.val = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.val;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a = new Node(data, null, null);
    if (this.val === null) {
      this.val = a;
    } else {
      let curr = this.val;
      let parent;
      for (; true; ) {
        parent = curr;
        if (data < curr.data) {
          curr = curr.left;
          if (curr === null) {
            parent.left = a;
            break;
          }
        } else {
          curr = curr.right;
          if (curr === null) {
            parent.right = a;
            break;
          }
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = false;
    let curr = this.val;
    for(; !result && curr;) {
      if (data > curr.data) {
        curr = curr.right;
      } else if (data < curr.data) {
        curr = curr.left;
      } else {
        result = true;
      }
    }
    return result;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curr = this.val;
    for (; !(curr.data === data);) {
      (data < curr.data) ? (curr = curr.left) : (curr = curr.right);
      if (curr === null) return null;
    }
    return curr;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curr = this.val;
    for (; !(curr.left === null);) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curr = this.val;
    for (; !(curr.right === null);) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};