type CompareFunction<T> = (parentElement: T, childElement: T) => boolean;

export class Heap<T> {
  public heapContainer: T[];
  public compareFunction: CompareFunction<T>;

  constructor(compareFcuntion: CompareFunction<T>) {
    if(new.target === Heap) {
      throw new Error("Can not call Heap directory");
    }

    this.heapContainer = [];

    /**
     * this.compareFunction can customize 
     * how to compare the element in this.heapContainer.
     */
    this.compareFunction = compareFcuntion;
  }

  /**
   * This function get parent index from Heap.heapContainier
   * heapContainer contain tree structure in an array
   */
  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  parent(index: number): T {
    const parentIndex = this.getParentIndex(index);
    return this.heapContainer[parentIndex];
  }

  /**
   * Swap parent element to child element
   * or child element to parent element
   */
  _swap(parentIndex: number, childIndex: number) {
    const parentElement = this.heapContainer[parentIndex];
    const childElement = this.heapContainer[childIndex];
    this.heapContainer[childIndex] = parentElement;
    this.heapContainer[parentIndex] = childElement;
  }

  _heapifyUp(customStartIndex?: number) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while(
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this._swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  add(item: T) {
    this.heapContainer.push(item);
    this._heapifyUp();
    return this;
  }

  /** 
   * This function isn't missing
   * This function is redefined and gets overwritten in other class
   * see https://github.com/trekhleb/javascript-algorithms/issues/236
   */
  pairIsInCorrectOrder(parentElement: T, childElement: T): boolean {
    throw new Error(`You have to implement heap pair comparision method for ${parentElement} and ${childElement} values.`);
  }
}
