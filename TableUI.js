import {
    RESET,
    RED,
    GREEN,
    YELLOW,
    BOLD,
    BRIGHT_BLUE,
    pColor,
    line,
  } from "./ConsoleUtils.js";
  
  export function displayMenu() {
    line();
    pColor("Menu Options", BRIGHT_BLUE, true);
    console.log(RESET);
    console.log("1. Not Sorted");
    console.log("2. Bubble Sort");
    console.log("3. Selection Sort");
    console.log("4. Insertion Sort");
    console.log("5. Merge Sort");
    console.log("6. Binary Search");
    console.log("7. Linear Search");
    console.log("8. Performance");
    line();
  }
  
  