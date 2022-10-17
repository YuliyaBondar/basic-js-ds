const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.size == 0) {
      this.head = new ListNode(value);
    } else {
      let currentValue = this.head;
      for (;currentValue.next;) {
        currentValue = currentValue.next;
      }
      currentValue.next = new ListNode(value);
    }
    this.size++;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.head) {
      const result = this.head.value;
      this.head = this.head.next;
      this.size--;
      return result;
    }
    return;
  }
}

module.exports = {
  Queue
};
