export function times(times: number, callback: (value: any, index: number, array: any[]) => void) {
  [...Array(times)].forEach(callback);
}