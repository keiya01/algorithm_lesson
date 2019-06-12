import { DoublyLinkedList } from "..";

describe("If push function can push to DoublyLinkedList.tail or not", () => {
  const tests = [
    {
      description: "Add value",
      data: [1, 2, 3],
      result: {
        head: [1, 2, 3],
        tail: [3, 2, 1]
      },
      isError: false
    }
  ];

  tests.forEach(({ description, data, result, isError }) => {
    const link = new DoublyLinkedList<typeof data[0]>();
    test(description, () => {
      if (isError) {
        return;
      }

      data.forEach(val => {
        link.push(val);
      });

      expect(link.findFromHead()).toEqual(result.head);
      expect(link.findFromTail()).toEqual(result.tail);
    });
  });
});

describe("If prepend function can prepend to DoublyLinkedList.tail or not", () => {
  const tests = [
    {
      description: "Add value",
      data: [1, 2, 3],
      result: {
        head: [3, 2, 1],
        tail: [1, 2, 3]
      },
      isError: false
    }
  ];

  tests.forEach(({ description, data, result, isError }) => {
    const link = new DoublyLinkedList<typeof data[0]>();
    test(description, () => {
      if (isError) {
        return;
      }

      data.forEach(val => {
        link.prepend(val);
      });

      expect(link.findFromHead()).toEqual(result.head);
      expect(link.findFromTail()).toEqual(result.tail);
    });
  });
});