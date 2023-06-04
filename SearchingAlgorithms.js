export default class SearchingAlgorithms {
  // Linear Search
  static linearSearch(items, searchItem, compareFn) {
    for (let i = 0; i < items.length; i++) {
      if (compareFn(items[i], searchItem) === 0) {
        return items[i];
      }
    }
    return null;
  }

  // Binary Search
  static binarySearch(items, searchItem, compareFn) {
    let left = 0;
    let right = items.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (compareFn(items[mid], searchItem) === 0) {
        return items[mid];
      } else if (compareFn(items[mid], searchItem) < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return null;
  }
}
