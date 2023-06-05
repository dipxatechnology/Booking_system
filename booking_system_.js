// Node class for creating individual nodes
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class for hotel booking system
class HotelBookingSystem {
  constructor() {
    this.head = null;
  }

  // Insert a booking into the linked list
  insertBooking(booking) {
    const newNode = new Node(booking);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Get the length of the linked list
  length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Get the node at a specific index
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length()) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }
}

// Sorting Algorithms

// Selection Sort
function selectionSort(list) {
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
function insertionSort(list) {
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
function bubbleSort(list) {
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
function mergeSort(list) {
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

// Searching Algorithms

// Linear Search
function linearSearch(list, bookingId) {
  let current = list.head;

  while (current) {
    if (current.data.bookingId === bookingId) {
      return current.data;
    }
    current = current.next;
  }

  return null;
}

// Binary Search
function binarySearch(list, bookingId) {
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

// Example usage:

const hotelBookings = new HotelBookingSystem();
hotelBookings.insertBooking({
  bookingId: 1,
  checkInDate: "2023-06-01",
  name: "John Doe",
  phoneNumber: "1234567890",
});
hotelBookings.insertBooking({
  bookingId: 2,
  checkInDate: "2023-06-05",
  name: "Jane Smith",
  phoneNumber: "9876543210",
});
hotelBookings.insertBooking({
  bookingId: 3,
  checkInDate: "2023-06-03",
  name: "Mike Johnson",
  phoneNumber: "5678901234",
});
hotelBookings.insertBooking({
  bookingId: 4,
  checkInDate: "2023-06-02",
  name: "Sarah Williams",
  phoneNumber: "3456789012",
});
hotelBookings.insertBooking({
  bookingId: 5,
  checkInDate: "2023-06-04",
  name: "Robert Davis",
  phoneNumber: "9012345678",
});

console.log("Original Booking List:");
let current = hotelBookings.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

const selectionSortedList = selectionSort(hotelBookings);
console.log("Booking List after Selection Sort:");
current = selectionSortedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

const insertionSortedList = insertionSort(hotelBookings);
console.log("Booking List after Insertion Sort:");
current = insertionSortedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

const bubbleSortedList = bubbleSort(hotelBookings);
console.log("Booking List after Bubble Sort:");
current = bubbleSortedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

const mergeSortedList = mergeSort(hotelBookings);
console.log("Booking List after Merge Sort:");
current = mergeSortedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}

const booking = linearSearch(bubbleSortedList, 3);
console.log("Booking found using Linear Search:", booking);

const bookingId = 2;
const bookingBinary = binarySearch(bubbleSortedList, 3);
console.log("Booking found using Binary Search:", bookingBinary);
