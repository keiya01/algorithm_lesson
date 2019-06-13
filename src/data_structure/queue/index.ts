'use strict';

import { LinkedList } from "../linkedList";

export class Queue<T> extends LinkedList<T> {
  isEmpty() {
    return !this.head;
  }

  enqueue(value: T) {
    this.push(value);
  }

  dequeue() {
    const deletedHead = this.head;
    this.deleteHead();
    return deletedHead;
  }

  peek() {
    if (!this.head) {
      return null;
    }
    return this.head.value;
  }
}
