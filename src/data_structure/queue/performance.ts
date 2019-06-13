'use strict';

import { performance } from "perf_hooks";
import { times } from "../../utils/array";
import { Queue } from "./index";

const arrayPerformance = (total: number) => {
  const unshift_start = performance.now();
  const arr: number[] = [];
  times(total, (_, index) => {
    arr.unshift(index);
  });
  const unshift_end = performance.now();
  console.log("unshift_array: ", unshift_end - unshift_start);

  const access_start = performance.now();
  arr[0];
  const access_end = performance.now();
  console.log("access_array: ", access_end - access_start)
}

const queuePerformance = (total: number) => {
  const enqueue_start = performance.now();
  const queue = new Queue<number>();
  times(total, (_, index) => {
    queue.enqueue(index);
  });
  const enqueue_end = performance.now();
  console.log("enqueue: ", enqueue_end - enqueue_start);

  const peek_start = performance.now();
  queue.peek();
  const peek_end = performance.now();
  console.log("peek: ", peek_end - peek_start);
}

arrayPerformance(10000);
queuePerformance(10000);
