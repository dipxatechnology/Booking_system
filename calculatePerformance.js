import { BOLD, GREEN, RED, RESET, pColor } from "./ConsoleUtils.js";

export function calculatePerformance(list, sortingMethod, methodName) {
  const startTime = performance.now();
  const result = sortingMethod(list);
  const endTime = performance.now();
  const totalTime = (endTime - startTime) * 1000000;
  console.log(
    BOLD +
      GREEN +
      methodName +
      RESET +
      " took nanoseconds " +
      BOLD +
      RED +
      totalTime +
      RESET +
      " nanoseconds.\n"
  );

  return result;
}

export function calculateSpace(list, sortingMethod, methodName) {
  const memoryUsage = process.memoryUsage().heapUsed;
  const sorted = sortingMethod(list);
  const totalMemoryUsage = process.memoryUsage().heapUsed;
  const spaceUsed = totalMemoryUsage - memoryUsage;
  console.log(
    BOLD +
      GREEN +
      methodName +
      RESET +
      " used " +
      BOLD +
      RED +
      spaceUsed +
      RESET +
      " bytes of memory.\n"
  );

  return sorted;
}