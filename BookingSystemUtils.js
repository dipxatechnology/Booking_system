import { CustomNode, HotelBookingSystem } from "./HotelBookingSystem.js";

export default class BookingSystemUtils {
  static selectionSort(list) {
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
  static insertionSort(list) {
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
  static bubbleSort(list) {
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
  static mergeSort(list) {
    if (!list.head || !list.head.next) {
      return list;
    }
    const mid = this.getMiddle(list.head);
    const leftHead = list.head;
    const rightHead = mid.next;
    mid.next = null;
    const sortedLeft = this.mergeSort(new HotelBookingSystem());
    sortedLeft.head = leftHead;
    const sortedRight = this.mergeSort(new HotelBookingSystem());
    sortedRight.head = rightHead;
    return this.merge(sortedLeft, sortedRight);
  }
  static getMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  static merge(left, right) {
    const dummyNode = new CustomNode(null);
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
    const mergedList = new HotelBookingSystem();
    mergedList.head = dummyNode.next; // Set the head of the merged list
    return mergedList;
  }
  static linearSearch(list, bookingId) {
    let current = list.head;
    while (current) {
      if (current.data.bookingId === bookingId) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }
  static binarySearch(bookingSystem, targetBookingId) {
    let low = 0;
    let high = bookingSystem.length() - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midNode = bookingSystem.getNodeAtIndex(mid);
      if (midNode && midNode.data.bookingId === targetBookingId) {
        return midNode.data;
      } else if (midNode && midNode.data.bookingId < targetBookingId) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return null;
  }
}
