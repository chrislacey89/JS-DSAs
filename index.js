function semordnilap(words) {
  // Write your code here.
  const resultMap = {};
  const results = [];
  for (let i = 0; i < words.length; i++) {
    resultMap[words[i]] = 1;
    const reversedString = words[i].split("").reverse("").join("");
    if (resultMap[reversedString]) {
      results.push([words[i], reversedString]);
    }
  }
  return results;
}

const words = ["abc", "diaper", "cba", "repaid"];
console.log(semordnilap(words));
