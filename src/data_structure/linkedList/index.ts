'use strict';

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

    if(!this.head.next) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
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
