// * Sorting Algorithms

// Selection Sort
export function selectionSort(list) {
  if (!list.head) {
    return new HotelBookingSystem();
  }

  const sortedList = new HotelBookingSystem();
  let current = list.head;

  while (current) {
    let min = current;
    let nextNode = current.next;

    while (nextNode) {
      if (nextNode.data.checkInDate < min.data.checkInDate) {
        min = nextNode;
      }
      nextNode = nextNode.next;
    }

    sortedList.insertBooking(min.data);

    current = current.next;
  }

  return sortedList;
}

// Insertion Sort
export function insertionSort(list) {
  if (!list.head) {
    return new HotelBookingSystem();
  }

  const sortedList = new HotelBookingSystem();
  let current = list.head;

  while (current) {
    let nextNode = current.next;

    if (
      !sortedList.head ||
      sortedList.head.data.checkInDate >= current.data.checkInDate
    ) {
      current.next = sortedList.head;
      sortedList.head = current;
    } else {
      let temp = sortedList.head;

      while (
        temp.next &&
        temp.next.data.checkInDate < current.data.checkInDate
      ) {
        temp = temp.next;
      }

      current.next = temp.next;
      temp.next = current;
    }

    current = nextNode;
  }

  return sortedList;
}

// Bubble Sort
export function bubbleSort(list) {
  if (!list.head) {
    return new HotelBookingSystem();
  }

  const sortedList = new HotelBookingSystem();
  let current = list.head;

  while (current) {
    sortedList.insertBooking(current.data);
    current = current.next;
  }

  let swapped = true;

  while (swapped) {
    swapped = false;
    current = sortedList.head;

    while (current.next) {
      if (current.data.checkInDate > current.next.data.checkInDate) {
        let temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;
        swapped = true;
      }

      current = current.next;
    }
  }

  return sortedList;
}

// Merge Sort
export function mergeSort(list) {
  if (!list.head || !list.head.next) {
    return list;
  }

  const mid = getMiddle(list.head);
  const leftHead = list.head;
  const rightHead = mid.next;
  mid.next = null;

  const sortedLeft = mergeSort(new HotelBookingSystem());
  sortedLeft.head = leftHead;
  const sortedRight = mergeSort(new HotelBookingSystem());
  sortedRight.head = rightHead;

  return merge(sortedLeft, sortedRight);
}

function getMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(left, right) {
  const dummyNode = new Node(null);
  let current = dummyNode;

  let leftPtr = left.head;
  let rightPtr = right.head;

  while (leftPtr && rightPtr) {
    if (leftPtr.data.checkInDate <= rightPtr.data.checkInDate) {
      current.next = leftPtr;
      leftPtr = leftPtr.next;
    } else {
      current.next = rightPtr;
      rightPtr = rightPtr.next;
    }

    current = current.next;
  }

  if (leftPtr) {
    current.next = leftPtr;
  } else if (rightPtr) {
    current.next = rightPtr;
  }

  return new HotelBookingSystem(dummyNode.next);
}
