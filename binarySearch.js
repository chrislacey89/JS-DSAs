const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

//? time complexity: O(log (n))
//? space complexity: O(n)
export default function binarySearch(array, target) {
  return searchHelper(array, target, 0, array.length - 1);
}

function searchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor(left + right);
    const potentialMatch = array[middle];
    if (potentialMatch === target) return middle;

    if (target < potentialMatch) {
      right = middle - 1;
    }
    if (target > potentialMatch) {
      left = middle + 1;
    }
  }
  return -1;
}
