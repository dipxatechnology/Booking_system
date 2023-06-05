export function linearSearch(list, bookingId) {
  let current = list.head;

  while (current) {
    if (current.data.bookingId === bookingId) {
      return current.data;
    }
    current = current.next;
  }

  return null;
}

export function binarySearch(list, bookingId) {
  let left = 0;
  let right = list.length() - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNode = list.getNodeAtIndex(mid);

    if (midNode.data.bookingId === bookingId) {
      return midNode.data;
    } else if (midNode.data.bookingId < bookingId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
