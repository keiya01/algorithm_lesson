import { Heap } from "./heap";

export class MaxHeap<T> extends Heap<T> {
  pairIsInCorrectOrder(parentElement: T, childElement: T) {
    return this.compareFunction(parentElement, childElement);
  }
}