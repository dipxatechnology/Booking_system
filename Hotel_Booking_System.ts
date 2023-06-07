interface Booking {
  bookingId: number;
  checkInDate: string;
  name: string;
  phoneNumber: string;
}

class CustomNode<T> {
  data: T;
  next: CustomNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class HotelBookingSystem<T extends Booking> {
  head: CustomNode<T> | null;

  constructor() {
    this.head = null;
  }

  insertBooking(booking: T) {
    const newNode = new CustomNode<T>(booking);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current: CustomNode<T> | null = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  length(): number {
    let count = 0;
    let current: CustomNode<T> | null = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  getNodeAtIndex(index: number): CustomNode<T> | null {
    if (index < 0 || index >= this.length()) {
      return null;
    }

    let count = 0;
    let current: CustomNode<T> | null = this.head;

    while (count < index) {
      if (current === null) {
        // Handle the case where 'current' is null before reaching the desired index
        return null;
      }
      current = current.next;
      count++;
    }

    return current;
  }
}

class BookingSystemUtils {
  static selectionSort<T extends Booking>(
    list: HotelBookingSystem<T>
  ): HotelBookingSystem<T> {
    if (!list.head) {
      return new HotelBookingSystem<T>();
    }

    const sortedList = new HotelBookingSystem<T>();
    let current: CustomNode<T> | null = list.head;

    while (current) {
      let min: CustomNode<T> | null = current;
      let nextNode: CustomNode<T> | null = current.next;

      while (nextNode) {
        if (nextNode.data.checkInDate < min.data.checkInDate) {
          min = nextNode;
        }
        nextNode = nextNode.next;
      }

      sortedList.insertBooking(min!.data);
      current = current.next;
    }

    return sortedList;
  }

  static insertionSort<T extends Booking>(
    list: HotelBookingSystem<T>
  ): HotelBookingSystem<T> {
    if (!list.head) {
      return new HotelBookingSystem<T>();
    }

    const sortedList = new HotelBookingSystem<T>();
    let current: CustomNode<T> | null = list.head;

    while (current) {
      let nextNode: CustomNode<T> | null = current.next;

      if (
        !sortedList.head ||
        sortedList.head.data.checkInDate >= current.data.checkInDate
      ) {
        current.next = sortedList.head;
        sortedList.head = current;
      } else {
        let temp: CustomNode<T> | null = sortedList.head;

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

  static bubbleSort<T extends Booking>(
    list: HotelBookingSystem<T>
  ): HotelBookingSystem<T> {
    if (!list.head) {
      return new HotelBookingSystem<T>();
    }

    const sortedList = new HotelBookingSystem<T>();
    let current: CustomNode<T> | null = list.head;

    while (current) {
      sortedList.insertBooking(current.data);
      current = current.next;
    }

    let swapped = true;

    while (swapped) {
      swapped = false;
      current = sortedList.head;

      while (current && current.next) {
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

  static mergeSort<T extends Booking>(
    list: HotelBookingSystem<T>
  ): HotelBookingSystem<T> {
    if (!list.head || !list.head.next) {
      return list;
    }

    const mid = this.getMiddle(list.head);
    const leftHead = list.head;
    const rightHead = mid!.next;
    mid!.next = null;

    const sortedLeft = this.mergeSort(new HotelBookingSystem<T>());
    sortedLeft.head = leftHead;
    const sortedRight = this.mergeSort(new HotelBookingSystem<T>());
    sortedRight.head = rightHead;

    return this.merge(sortedLeft, sortedRight);
  }

  static getMiddle<T extends Booking>(head: CustomNode<T>): CustomNode<T> {
    let slow: CustomNode<T> | null = head;
    let fast: CustomNode<T> | null = head;

    while (fast && fast.next && fast.next.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    return slow!;
  }

  static merge<T extends Booking>(
    left: HotelBookingSystem<T>,
    right: HotelBookingSystem<T>
  ): HotelBookingSystem<T> {
    const dummyNode = new CustomNode<T>(null!);
    let current: CustomNode<T> | null = dummyNode;

    let leftPtr: CustomNode<T> | null = left.head;
    let rightPtr: CustomNode<T> | null = right.head;

    while (leftPtr && rightPtr) {
      if (leftPtr.data.checkInDate <= rightPtr.data.checkInDate) {
        current!.next = leftPtr;
        leftPtr = leftPtr.next;
      } else {
        current!.next = rightPtr;
        rightPtr = rightPtr.next;
      }

      current = current!.next;
    }

    if (leftPtr) {
      current!.next = leftPtr;
    } else if (rightPtr) {
      current!.next = rightPtr;
    }

    const mergedList = new HotelBookingSystem<T>();
    mergedList.head = dummyNode.next; // Set the head of the merged list

    return mergedList;
  }

  static linearSearch<T extends Booking>(
    list: HotelBookingSystem<T>,
    bookingId: number
  ): T | null {
    let current: CustomNode<T> | null = list.head;

    while (current) {
      if (current.data.bookingId === bookingId) {
        return current.data;
      }
      current = current.next;
    }

    return null;
  }

  static binarySearch<T extends Booking>(
    list: HotelBookingSystem<T>,
    bookingId: number
  ): T | null {
    let left = 0;
    let right = list.length() - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midNode = list.getNodeAtIndex(mid);

      if (midNode!.data.bookingId === bookingId) {
        return midNode!.data;
      } else if (midNode!.data.bookingId < bookingId) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return null;
  }
}

// Example usage:

const hotelBookings = new HotelBookingSystem<Booking>();
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
  phoneNumber: "0987654321",
});
hotelBookings.insertBooking({
  bookingId: 3,
  checkInDate: "2023-06-03",
  name: "Alice Johnson",
  phoneNumber: "5555555555",
});

console.log(hotelBookings.length()); // Output: 3

const sortedBookings = BookingSystemUtils.insertionSort(hotelBookings);
console.log(sortedBookings.head); // Output: CustomNode { data: { bookingId: 1, checkInDate: '2023-06-01', name: 'John Doe', phoneNumber: '1234567890' }, next: CustomNode { data: { bookingId: 3, checkInDate: '2023-06-03', name: 'Alice Johnson', phoneNumber: '5555555555' }, next: CustomNode { data: { bookingId: 2, checkInDate: '2023-06-05', name: 'Jane Smith', phoneNumber: '0987654321' }, next: null } } }
console.log("LINEAR SEARCH");

const foundBooking = BookingSystemUtils.linearSearch(sortedBookings, 2);
console.log(foundBooking); // Output: { bookingId: 3, checkInDate: '2023-06-03', name: 'Alice Johnson', phoneNumber: '5555555555' }
console.log("BINARY SEARCH ");

const booking_ID: number = 2;
const binaryFoundBooking = BookingSystemUtils.binarySearch(
  sortedBookings,
  booking_ID
);
console.log(binaryFoundBooking); // Output: { bookingId: 2, checkInDate: '2023-06-05', name: 'Jane Smith', phoneNumber: '0987654321' }
