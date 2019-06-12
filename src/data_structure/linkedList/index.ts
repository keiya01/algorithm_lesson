'use strict';

import { performance } from 'perf_hooks';
import { times } from "../../utils/array";

export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;
  public prev: LinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value: T) {
    const node = new LinkedListNode<T>(value);
    if (!this.head) {
      // 初期値として同じnodeを持っているため, 
      // nodeは共有される
      this.head = node;
      this.tail = node;
      return;
    }

    if(!this.tail) {
      return;
    }

    // 前回保存されたnodeのnextに今回生成されたnodeを代入している
    // つまりthis.tailは前回のnode
    this.tail.next = node;

    // 今回生成したnodeを保存しておく
    this.tail = node;
  }

  prepend(value: T) {
    const node = new LinkedListNode<T>(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      // headと連携したtailを生成
      this.tail = node;
    }
  }

  deleteHead() {
    if(!this.head) {
      return;
    }

    const deletedHead = this.head;
    this.head = deletedHead.next;
  }

  deleteTail() {
    if(!this.tail || !this.head) {
      return;
    }

    if(this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
    }

    let prev = null;
    let current = this.head;
    while(current.next) {
      prev = current;
      current = current.next;
    }

    if(!prev) {
      return;
    }

    prev.next = null;
    this.tail = prev;
  }

  toString() {
    if (!this.head || !this.tail) {
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

function measurePerformance(totalData: number) {
  const linkedListUnshiftStart = performance.now();
  const linkedListUnshift = new LinkedList<number>();
  times(totalData, (_, index) => {
    linkedListUnshift.prepend(index);
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

measurePerformance(10000);
