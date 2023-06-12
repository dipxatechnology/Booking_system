"use strict";

import BookingSystemUtils from "./BookingSystemUtils.js";
import promptSync from "prompt-sync";
import {
  RED,
  GREEN,
  YELLOW,
  line,
  pColor,
  BRIGHT_BLUE,
  RESET,
  clearTerminal,
} from "./ConsoleUtils.js";
import { HotelBookingSystem } from "./HotelBookingSystem.js";
import { calculatePerformance } from "./calculatePerformance.js";
import { displayMenu } from "./TableUI.js";

// Example usage:
const prompt = promptSync();
const hotelBookings = new HotelBookingSystem();

function addBooking() {
  line();
  pColor("user inputs", GREEN);
  console.log(RESET);
  const bookingIdInput = prompt("Enter the booking ID (enter 0 to exit): ");
  const bookingId = parseInt(bookingIdInput);

  if (bookingId === 0) {
    return; // Exit the function, allowing the program to continue
  }

  const checkInDate = prompt("Enter the check-in date: ");
  const name = prompt("Enter the guest's name: ");
  const phoneNumber = prompt("Enter the guest's phone number: ");

  hotelBookings.insertBooking({
    bookingId: bookingId,
    checkInDate: checkInDate,
    name: name,
    phoneNumber: phoneNumber,
  });

  addBooking(); // Recursive call to continue the loop
}

addBooking();
line();
console.log(RESET);
clearTerminal();

// !hardcoded input
// hotelBookings.insertBooking({
//   bookingId: 10,
//   checkInDate: "2023-06-10",
//   name: "Sakib",
//   phoneNumber: "4567891230",
// });

// hotelBookings.insertBooking({
//   bookingId: 1,
//   checkInDate: "2023-06-01",
//   name: "Wong",
//   phoneNumber: "1234567890",
// });

// hotelBookings.insertBooking({
//   bookingId: 3,
//   checkInDate: "2023-06-05",
//   name: "Andra",
//   phoneNumber: "0987654321",
// });

// hotelBookings.insertBooking({
//   bookingId: 2,
//   checkInDate: "2023-06-03",
//   name: "Jia Jun",
//   phoneNumber: "5555555555",
// });

function MakeItArr(linkedList) {
  const array = [];
  let current = linkedList.head;

  while (current) {
    array.push(current.data);
    current = current.next;
  }

  return array;
}

function getUserChoice() {
  return new Promise((resolve) => {
    const userInput = prompt("Enter your choice: ");
    resolve(userInput.trim());
  });
}

async function start() {
  globalThis.run = true;
  while (run) {
    displayMenu();
    const notSorted = MakeItArr(hotelBookings);
    const bubbleSorted = BookingSystemUtils.bubbleSort(hotelBookings);
    const SelectionSort = BookingSystemUtils.selectionSort(hotelBookings);
    const InsertionSort = BookingSystemUtils.insertionSort(hotelBookings);
    const MergeSort = BookingSystemUtils.mergeSort(hotelBookings);

    const choice = await getUserChoice();
    console.log(`Selected choice: ${choice}`);

    // Handle the choice based on the selected option
    switch (choice) {
      case "0":
        run = false;
      case "1":
        // Handle "Not Sorted" option
        // ! not Sorted

        pColor("Not Sorted", RED);
        console.log(notSorted);
        break;
      case "2":
        // Handle "Bubble Sort" option
        // !  bubbleSorted
        const bookingArr = MakeItArr(bubbleSorted);
        line();
        pColor("SORTED ARRAY:");
        pColor("bubble Sort", GREEN);
        console.log(bookingArr);
        break;
      case "3":
        // Handle "Selection Sort" option
        // ! SelectionSort
        const bookingArr2 = MakeItArr(SelectionSort);
        line();
        pColor("Selection Sort", GREEN);
        console.log(bookingArr2);
        break;
      case "4":
        // Handle "Insertion Sort" option
        //! Insertion Sort
        const bookingArr3 = MakeItArr(InsertionSort);
        line();
        pColor("Insertion Sort", GREEN);
        console.log(bookingArr3);
        break;
      case "5":
        // Handle "Merge Sort" option
        //! Merge Sort
        const bookingArr4 = MakeItArr(MergeSort);
        line();
        pColor("Merge Sort", GREEN);
        console.log(bookingArr4);
        break;
      case "6":
        // Handle "Binary Search" option
        // ! binary Search
        line();
        pColor("SEARCH");
        const searchStr = prompt("Enter the ID you want to search for:");
        const searchId = parseInt(searchStr);

        const search = BookingSystemUtils.binarySearch(bubbleSorted, searchId);
        pColor("binary Search", GREEN);
        console.log(search);

        break;
      case "7":
        // Handle "Linear Search" option
        // ! linear search
        line();
        pColor("SEARCH");
        const linearSearchStr = prompt("Enter your choice: ");
        const linearSearchId = parseInt(linearSearchStr);

        const linearSearch_ = BookingSystemUtils.linearSearch(
          bubbleSorted,
          linearSearchId
        );
        pColor("linear Search", GREEN);

        console.log(linearSearch_);
        break;
      case "8":
        // Handle "Performance" option
        // ! performance
        line();
        pColor("Performance");
        pColor(
          "the Performance may vary from machine to machine",
          BRIGHT_BLUE,
          false
        );
        calculatePerformance(
          hotelBookings,
          BookingSystemUtils.bubbleSort,
          "Bubble Sort"
        );

        calculatePerformance(
          hotelBookings,
          BookingSystemUtils.selectionSort,
          "Selection Sort"
        );

        calculatePerformance(
          hotelBookings,
          BookingSystemUtils.insertionSort,
          "Insertion Sort"
        );

        calculatePerformance(
          hotelBookings,
          BookingSystemUtils.mergeSort,
          "Merge Sort"
        );

        calculatePerformance(
          hotelBookings,
          (list) => BookingSystemUtils.linearSearch(list, 1),
          "Linear Search"
        );

        calculatePerformance(
          hotelBookings,
          (list) => BookingSystemUtils.binarySearch(list, 1),
          "Binary Search"
        );
        break;
      default:
        console.log("Invalid choice");
    }
  }
}

start();
