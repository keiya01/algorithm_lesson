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

export class DoublyLinkedList<T> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value: T) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    if (!this.tail) {
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  prepend(value: T) {
    const node = new LinkedListNode(value);

    if(this.head) {
      this.head.prev = node;
    }

    node.next = this.head;
    this.head = node;

    if(!this.tail) {
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
    if(!this.tail) {
      return;
    }

    const deletedTail = this.tail;
    this.tail = deletedTail.prev;
  }

  findFromHead() {
    let current = this.head;
    if(!current) {
      return;
    }

    const result = [];
    while(current.next) {
      result.push(current.value);
      current = current.next;
    }
    result.push(current.value);

    return result;
  }

  findFromTail() {
    let current = this.tail;
    if(!current) {
      return;
    }

    const result = [];
    while(current.prev) {
      result.push(current.value);
      current = current.prev;
    }
    result.push(current.value);

    return result;
  }

}
