export class CustomNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
export class HotelBookingSystem {
  constructor() {
    this.head = null;
  }
  insertBooking(booking) {
    const newNode = new CustomNode(booking);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length()) {
      return null;
    }
    let count = 0;
    let current = this.head;
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
