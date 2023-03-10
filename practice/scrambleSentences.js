function scramble(sentences) {
  return sentences.map((sentence) => {
    const splitSentence = sentence.split(" ");
    return splitSentence
      .map((word) => {
        return scrambleWord(word);
      })
      .join(" ");
  });
}
function scrambleWord(word) {
  const wordArray = [...word];
  let lastIndex = wordArray.length - 1;
  const punctuation = wordArray[lastIndex].match(/[A-Za-z]/)
    ? null
    : wordArray.pop();
  const first = wordArray.shift();
  const last = wordArray.pop();
  //! using for loop
  for (let i = 0; i < wordArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    console.log("🚀  file: index.js:22  i + 1):", i + 1);
    const randomNum = Math.random();
    console.log("🚀  file: index.js:25  randomNum:", randomNum);
    console.log("⚽  file: index.js:22  i + 1):", randomNum * (i + 1));

    console.log(j);
  }
  return [first, ...wordArray, last, punctuation].join("");
  // ! using sort function
  // const scrambledLetters = wordArray.sort(() => Math.random() - 0.5);
  // return [first, ...scrambledLetters, last, punctuation].join("");
  //! using push and pop
  // const scrambledLetters = [];
  // for (let i = 0; i < lastIndex; i++) {
  //   if (i % 2 === 0) {
  //     scrambledLetters.unshift(wordArray[i]);
  //   } else {
  //     scrambledLetters.push(wordArray[i]);
  //   }
  // }
  // return [first, ...scrambledLetters, last, punctuation].join("");
}

console.log(scramble(["The quick brown fox jumps over the lazy dog"]));
