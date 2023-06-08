"use strict";

import BookingSystemUtils from "./BookingSystemUtils.js";
import {
  RED,
  GREEN,
  YELLOW,
  line,
  pColor,
  BRIGHT_BLUE,
} from "./ConsoleUtils.js";
import { HotelBookingSystem } from "./HotelBookingSystem.js";
import { calculatePerformance } from "./calculatePerformance.js";

// Example usage:
const hotelBookings = new HotelBookingSystem();
hotelBookings.insertBooking({
  bookingId: 10,
  checkInDate: "2023-06-10",
  name: "Sakib",
  phoneNumber: "4567891230",
});
hotelBookings.insertBooking({
  bookingId: 1,
  checkInDate: "2023-06-01",
  name: "Wong",
  phoneNumber: "1234567890",
});
hotelBookings.insertBooking({
  bookingId: 3,
  checkInDate: "2023-06-05",
  name: "Andra",
  phoneNumber: "0987654321",
});
hotelBookings.insertBooking({
  bookingId: 2,
  checkInDate: "2023-06-03",
  name: "Jia Jun",
  phoneNumber: "5555555555",
});

function MakeItArr(linkedList) {
  const array = [];
  let current = linkedList.head;

  while (current) {
    array.push(current.data);
    current = current.next;
  }

  return array;
}
// line();
// pColor("Performance");
// pColor("the Performance may vary from machine to machine", BRIGHT_BLUE, false);
// calculatePerformance(
//   hotelBookings,
//   BookingSystemUtils.bubbleSort,
//   "Bubble Sort"
// );
// calculatePerformance(
//   hotelBookings,
//   BookingSystemUtils.selectionSort,
//   "Selection Sort"
// );
// calculatePerformance(
//   hotelBookings,
//   BookingSystemUtils.insertionSort,
//   "Insertion Sort"
// );
// calculatePerformance(hotelBookings, BookingSystemUtils.mergeSort, "Merge Sort");
// calculatePerformance(
//   hotelBookings,
//   (list) => BookingSystemUtils.linearSearch(list, 1),
//   "Linear Search"
// );
// calculatePerformance(
//   hotelBookings,
//   (list) => BookingSystemUtils.binarySearch(list, 1),
//   "Binary Search"
// );

// *------------------------------------------------------------------

// // //!  bubbleSorted

// const bubbleSorted = BookingSystemUtils.bubbleSort(hotelBookings);
// const bookingArr = MakeItArr(bubbleSorted);
// line();
// pColor("SORTED ARRAY:");
// pColor("bubble Sort", GREEN);
// console.log(bookingArr);

// //! SelectionSort
// const SelectionSort = BookingSystemUtils.selectionSort(hotelBookings);
// const bookingArr2 = MakeItArr(SelectionSort);
// line();
// pColor("Selection Sort", GREEN);
// console.log(bookingArr2);

// //! Insertion Sort
// const InsertionSort = BookingSystemUtils.insertionSort(hotelBookings);
// const bookingArr3 = MakeItArr(InsertionSort);
// line();
// pColor("Insertion Sort", GREEN);
// console.log(bookingArr3);

//! Merge Sort
const MergeSort = BookingSystemUtils.mergeSort(hotelBookings);
const bookingArr4 = MakeItArr(MergeSort);
line();
pColor("Merge Sort", GREEN);
console.log(bookingArr4);

// //! quick Sort
// const quickSort = BookingSystemUtils.quicksort(hotelBookings);
// const bookingArr6 = MakeItArr(quickSort);
// line();
// pColor("quic kSort", GREEN);
// console.log(bookingArr6);
// //! binary Search

// line();
// pColor("SEARCH");
// const search = BookingSystemUtils.binarySearch(bubbleSorted, 1);
// pColor("binary Search", GREEN);
// console.log(search);

// line();
// pColor("SEARCH");
// const linearSearch_ = BookingSystemUtils.linearSearch(bubbleSorted, 2);
// pColor("linear Search", GREEN);
// console.log(linearSearch_);
