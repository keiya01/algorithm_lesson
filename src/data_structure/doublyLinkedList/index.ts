class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null;
  public prev: LinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList<T> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
