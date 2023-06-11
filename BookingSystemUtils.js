import { CustomNode, HotelBookingSystem } from "./HotelBookingSystem.js";

export default class BookingSystemUtils {
  // ! selectionSort
  static selectionSort(list) {
    const length = list.length();
    if (length <= 1) {
      return list; // Nothing to sort, return the original list
    }
    let current = list.head;
    while (current !== null) {
      let minNode = current;
      let nextNode = current.next;
      while (nextNode !== null) {
        if (nextNode.data.bookingId < minNode.data.bookingId) {
          minNode = nextNode;
        }
        nextNode = nextNode.next;
      }
      // Swap the data of 'current' and 'minNode'
      if (current !== minNode) {
        const temp = current.data;
        current.data = minNode.data;
        minNode.data = temp;
      }
      current = current.next;
    }
    return list; // Return the sorted linked list
  }

  // ! insertionSort

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

  // ! bubbleSort

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
  // ! mergeSort

  // static mergeSort(list) {
  //   if (!list.head || !list.head.next) {
  //     return list;
  //   }
  //   const mid = this.getMiddle(list.head);
  //   const leftHead = list.head;
  //   const rightHead = mid.next;
  //   mid.next = null;
  //   const sortedLeft = this.mergeSort(new HotelBookingSystem());
  //   sortedLeft.head = leftHead;
  //   const sortedRight = this.mergeSort(new HotelBookingSystem());
  //   sortedRight.head = rightHead;
  //   return this.merge(sortedLeft, sortedRight);
  // }

  //!mergeSort v2
  static mergeSort(list) {
    if (!list || !list.next) {
      return list;
    }
    const mid = this.getMiddle(list);
    const leftHead = list;
    const rightHead = mid.next;
    mid.next = null;
    const sortedLeft = this.mergeSort(leftHead);
    const sortedRight = this.mergeSort(rightHead);
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
  // ! linearSearch
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

  // static quicksort(node) {
  //   if (node === null || node.next === null) {
  //     return node;
  //   }
  //   const pivot = node;
  //   let smallerHead = null;
  //   let smallerTail = null;
  //   let equalHead = null;
  //   let equalTail = null;
  //   let greaterHead = null;
  //   let greaterTail = null;
  //   let current = node.next;
  //   while (current !== null) {
  //     if (current.data.bookingId < pivot.data.bookingId) {
  //       if (smallerHead === null) {
  //         smallerHead = current;
  //         smallerTail = current;
  //       } else {
  //         smallerTail.next = current;
  //         smallerTail = current;
  //       }
  //     } else if (current.data.bookingId === pivot.data.bookingId) {
  //       if (equalHead === null) {
  //         equalHead = current;
  //         equalTail = current;
  //       } else {
  //         equalTail.next = current;
  //         equalTail = current;
  //       }
  //     } else {
  //       if (greaterHead === null) {
  //         greaterHead = current;
  //         greaterTail = current;
  //       } else {
  //         greaterTail.next = current;
  //         greaterTail = current;
  //       }
  //     }
  //     current = current.next;
  //   }
  //   if (smallerTail !== null) {
  //     smallerTail.next = null;
  //     smallerHead = quicksort(smallerHead);
  //     smallerTail = getTail(smallerHead);
  //   }
  //   if (greaterTail !== null) {
  //     greaterTail.next = null;
  //     greaterHead = quicksort(greaterHead);
  //   }
  //   if (smallerHead !== null) {
  //     pivot.next = smallerHead;
  //     smallerTail.next = equalHead !== null ? equalHead : greaterHead;
  //   } else {
  //     pivot.next = equalHead !== null ? equalHead : greaterHead;
  //   }
  //   return pivot;
  // }
  // getTail(node) {
  //   if (node === null) {
  //     return null;
  //   }
  //   let tail = node;
  //   while (tail.next !== null) {
  //     tail = tail.next;
  //   }
  //   return tail;
  // }
  // static linearSearch(list, bookingId) {
  //   let current = list.head;
  //   while (current) {
  //     if (current.data.bookingId === bookingId) {
  //       return current.data;
  //     }
  //     current = current.next;
  //   }
  //   return null;
  // }
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
