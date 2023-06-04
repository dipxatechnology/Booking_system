export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  toArray() {
    return [...this.items];
  }
}
