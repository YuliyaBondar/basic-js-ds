const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodes = [];
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.nodes.length) {
      return {data: this.nodes[0]};
    } else {
      return null;
    }
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.nodes.push(data);
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.nodes.includes(data);
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.nodes.includes(data)) {
      return {data: data};
    } else {
      return null;
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const index = this.nodes.indexOf(data);
    return this.nodes.splice(index, 1); 
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let minimum;
    if (this.nodes.length) {
      minimum = this.nodes[0];
    } else {
      minimum = null;
    }

    for (let index = 1; index < this.nodes.length; index++) {
      if (this.nodes[index] < minimum) minimum = this.nodes[index];
    }
    
    return minimum;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let maximum;
    if (this.nodes.length) {
      maximum = this.nodes[0];
    } else {
      maximum = null;
    }

    for (let index = 1; index < this.nodes.length; index++) {
      if (this.nodes[index] > maximum) maximum = this.nodes[index]
    }
    
    return maximum;
  }
}

module.exports = {
  BinarySearchTree
};