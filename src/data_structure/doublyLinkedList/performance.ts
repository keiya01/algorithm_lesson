import { times } from "../../utils/array";
import { DoublyLinkedList } from ".";

function measurePerformance(totalData: number) {
  const linkedListUnshiftStart = performance.now();
  const linkedListUnshift = new DoublyLinkedList<number>();
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
  const linkedListPush = new DoublyLinkedList<number>();
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