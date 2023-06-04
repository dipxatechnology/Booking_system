export default class SortingAlgorithms {
  // Selection Sort
  static selectionSort(items, compareFn) {
    const sortedItems = [...items];
    const n = sortedItems.length;
    for (let i = 0; i < n - 1; i++) {
      let smallestIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (compareFn(sortedItems[j], sortedItems[smallestIndex]) < 0) {
          smallestIndex = j;
        }
      }
      const temp = sortedItems[i];
      sortedItems[i] = sortedItems[smallestIndex];
      sortedItems[smallestIndex] = temp;
    }
    return sortedItems;
  }

  // Insertion Sort
  static insertionSort(items, compareFn) {
    const sortedItems = [...items];
    const n = sortedItems.length;
    for (let i = 1; i < n; i++) {
      const key = sortedItems[i];
      let j = i - 1;
      while (j >= 0 && compareFn(sortedItems[j], key) > 0) {
        sortedItems[j + 1] = sortedItems[j];
        j--;
      }
      sortedItems[j + 1] = key;
    }
    return sortedItems;
  }

  // Bubble Sort
  static bubbleSort(items, compareFn) {
    const sortedItems = [...items];
    const n = sortedItems.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (compareFn(sortedItems[j], sortedItems[j + 1]) > 0) {
          const temp = sortedItems[j];
          sortedItems[j] = sortedItems[j + 1];
          sortedItems[j + 1] = temp;
        }
      }
    }
    return sortedItems;
  }

  // Merge Sort
  static mergeSort(items, compareFn) {
    if (items.length <= 1) {
      return items;
    }
    const mid = Math.floor(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);
    return SortingAlgorithms.merge(
      SortingAlgorithms.mergeSort(left, compareFn),
      SortingAlgorithms.mergeSort(right, compareFn),
      compareFn
    );
  }

  static merge(left, right, compareFn) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}
