import Queue from "./Queue.js";
import SearchingAlgorithms from "./SearchingAlgorithms.js";
import SortingAlgorithms from "./SortingAlgorithms.js";
import Stack from "./Stack.js";

class HotelManagementSystem {
  constructor() {
    this.guests = new Stack();
    this.bookings = new Queue();
  }

  addGuest(name, id, roomNumber, bookingDate) {
    const guest = { name, id };
    const booking = { roomNumber, bookingDate };
    this.guests.push(guest);
    this.bookings.enqueue(booking);
  }

  sortGuestsBySelectionSort(compareFn) {
    this.guests = SortingAlgorithms.selectionSort(
      this.guests.toArray(),
      compareFn
    );
  }

  sortGuestsByInsertionSort(compareFn) {
    this.guests = SortingAlgorithms.insertionSort(
      this.guests.toArray(),
      compareFn
    );
  }

  sortGuestsByBubbleSort(compareFn) {
    this.guests = SortingAlgorithms.bubbleSort(
      this.guests.toArray(),
      compareFn
    );
  }

  sortGuestsByMergeSort(compareFn) {
    this.guests = SortingAlgorithms.mergeSort(this.guests.toArray(), compareFn);
  }

  sortBookingsBySelectionSort(compareFn) {
    this.bookings = SortingAlgorithms.selectionSort(
      this.bookings.toArray(),
      compareFn
    );
  }

  sortBookingsByInsertionSort(compareFn) {
    this.bookings = SortingAlgorithms.insertionSort(
      this.bookings.toArray(),
      compareFn
    );
  }

  sortBookingsByBubbleSort(compareFn) {
    this.bookings = SortingAlgorithms.bubbleSort(
      this.bookings.toArray(),
      compareFn
    );
  }

  sortBookingsByMergeSort(compareFn) {
    this.bookings = SortingAlgorithms.mergeSort(
      this.bookings.toArray(),
      compareFn
    );
  }

  searchGuestByNameLinear(name, compareFn) {
    return SearchingAlgorithms.linearSearch(
      this.guests.toArray(),
      name,
      compareFn
    );
  }

  searchGuestByNameBinary(name, compareFn) {
    return SearchingAlgorithms.binarySearch(
      this.guests.toArray(),
      name,
      compareFn
    );
  }

  searchBookingByRoomNumberLinear(roomNumber, compareFn) {
    return SearchingAlgorithms.linearSearch(
      this.bookings.toArray(),
      roomNumber,
      compareFn
    );
  }

  searchBookingByRoomNumberBinary(roomNumber, compareFn) {
    return SearchingAlgorithms.binarySearch(
      this.bookings.toArray(),
      roomNumber,
      compareFn
    );
  }
}

// Example usage:

const compareGuestByName = (guest1, guest2) => {
  if (guest1.name < guest2.name) {
    return -1;
  } else if (guest1.name > guest2.name) {
    return 1;
  } else {
    return 0;
  }
};

const compareBookingByRoomNumber = (booking1, booking2) => {
  if (booking1.roomNumber < booking2.roomNumber) {
    return -1;
  } else if (booking1.roomNumber > booking2.roomNumber) {
    return 1;
  } else {
    return 0;
  }
};

const hotelSystem = new HotelManagementSystem();

// Adding guests
hotelSystem.addGuest("John Doe", 1, 101, "2023-06-01");
hotelSystem.addGuest("Alice Smith", 2, 102, "2023-06-02");
hotelSystem.addGuest("Bob Johnson", 3, 103, "2023-06-03");

// Sorting guests by name using merge sort
hotelSystem.sortGuestsByMergeSort(compareGuestByName);
console.log(hotelSystem.guests);
// Output: [ { name: 'Alice Smith', id: 2 }, { name: 'Bob Johnson', id: 3 }, { name: 'John Doe', id: 1 } ]

// Sorting bookings by room number using insertion sort
hotelSystem.sortBookingsByInsertionSort(compareBookingByRoomNumber);
console.log(hotelSystem.bookings);
// Output: [ { roomNumber: 101, bookingDate: '2023-06-01' }, { roomNumber: 102, bookingDate: '2023-06-02' }, { roomNumber: 103, bookingDate: '2023-06-03' } ]

// Searching for a guest by name using linear search
const foundGuest = hotelSystem.searchGuestByNameLinear(
  "Alice Smith",
  compareGuestByName
);
console.log(foundGuest);
// Output: { name: 'Alice Smith', id: 2 }

// Searching for a booking by room number using binary search
const foundBooking = hotelSystem.searchBookingByRoomNumberBinary(
  102,
  compareBookingByRoomNumber
);
console.log(foundBooking);
// Output: { roomNumber: 102, bookingDate: '2023-06-02' }
