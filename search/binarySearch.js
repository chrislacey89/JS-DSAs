const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

//? time complexity: O(log (n))
//? space complexity: O(n)
function binarySearch(array, target) {
  return searchHelper(array, target, 0, array.length - 1);
}

function searchHelper(array, target, left, right) {
  while (left <= right) {
    // get middle number
    const middle = Math.floor((left + right)/ 2);
    const potentialMatch = array[middle];
    // if target is the potential match, return
    if (potentialMatch === target) return middle;
    // if target is less than potential match, update right pointer to middle - 1
    if (target < potentialMatch) {
      right = middle - 1;
    }
    // otherwise update left pointer to middle + 1
    else {
      left = middle + 1;
    }
  }
  return -1;
}
