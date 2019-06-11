'use strict';

import { performance } from 'perf_hooks';
import { times } from "../../utils/array";

class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  public head: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
  }

  push(value: T) {
    const node = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  unshift(value: T) {
    const node = new LinkedListNode<T>(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  toString() {
    if (!this.head) {
      throw new Error("`Linked List` is empty! Please push data!");
    }

    const linkedListArray = [];
    let current = this.head;
    while (current.next) {
      linkedListArray.push(current.value);
      current = current.next;
    }

    linkedListArray.push(current.value);

    return linkedListArray.toString();
  }
}

function compareArray(totalData: number) {
  const linkedListUnshiftStart = performance.now();
  const linkedListUnshift = new LinkedList<number>();
  times(totalData, (_, index) => {
    linkedListUnshift.unshift(index);
  });
  const linkedListUnshiftEnd = performance.now();
  console.log("Linked_List_Unshift: ", linkedListUnshiftEnd - linkedListUnshiftStart);

  const arrayUnshiftStart = performance.now();
  let arrayUnshift: number[] = [];
  times(totalData, (_, index) => {
    arrayUnshift = [
      index,
      ...arrayUnshift
    ];
  });;
  const arrayUnshiftEnd = performance.now();
  console.log("Array_Unshift: ", arrayUnshiftEnd - arrayUnshiftStart);

  const linkedListPushStart = performance.now();
  const linkedListPush = new LinkedList<number>();
  times(totalData, (_, index) => {
    linkedListPush.push(index);
  });
  const linkedListPushEnd = performance.now();
  console.log("Linked_List_Push: ", linkedListPushEnd - linkedListPushStart);

  const arrayPushStart = performance.now();
  const arrayPush = [];
  times(totalData, (_, index) => {
    arrayPush.unshift(index);
  });
  const arrayPushEnd = performance.now();
  console.log("Array_Push: ", arrayPushEnd - arrayPushStart);
}

compareArray(10000);
/* 
# result
  ## unshift
    Linked_List:  2.5056460052728653
    Array: 396.6038039922714

  ## push
    Linked_List: 154.21594700217247
    Array: 14.169541999697685
*/
