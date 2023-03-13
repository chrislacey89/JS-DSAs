function fractionMath(firstNumber, operation, secondNumber) {
  const {
    firstNumberTop,
    firstNumberBottom,
    secondNumberTop,
    secondNumberBottom,
  } = equalizeFractions(firstNumber, secondNumber);

  switch (operation) {
    case "add":
      return reduceFraction(
        firstNumberTop + secondNumberTop,
        firstNumberBottom
      );
    case "subtract":
      return reduceFraction(
        firstNumberTop - secondNumberTop,
        firstNumberBottom
      );
    case "multiply":
      return reduceFraction(
        firstNumberTop * secondNumberTop,
        firstNumberBottom * secondNumberBottom
      );
    case "divide":
      return reduceFraction(
        firstNumberTop * secondNumberBottom,
        firstNumberBottom * secondNumberTop
      );
  }
}

function reduceFraction(numerator, denominator) {
  const absoluteNumerator = Math.abs(numerator);
  let largestDivisibleNumber = 1;
  for (let i = 1; i <= absoluteNumerator; i++) {
    if (absoluteNumerator % i === 0 && denominator % i === 0) {
      largestDivisibleNumber = i;
    }
  }
  if (denominator / largestDivisibleNumber === 1) {
    return `${numerator / largestDivisibleNumber}`;
  }
  return `${numerator / largestDivisibleNumber}/${
    denominator / largestDivisibleNumber
  }`;
}

function equalizeFractions(firstNumber, secondNumber) {
  const firstNumberSplit = firstNumber.split("");
  const firstNumberTop = parseInt(firstNumberSplit[0]);
  const firstNumberBottom = parseInt(firstNumberSplit[2]);

  const secondNumberSplit = secondNumber.split("");
  const secondNumberTop = parseInt(secondNumberSplit[0]);
  const secondNumberBottom = parseInt(secondNumberSplit[2]);

  // get equal denominators
  const newFirstTop = firstNumberTop * secondNumberBottom;
  const newFirstBottom = firstNumberBottom * secondNumberBottom;

  const newSecondTop = secondNumberTop * firstNumberBottom;
  const newSecondBottom = secondNumberBottom * firstNumberBottom;
  return {
    firstNumberTop: newFirstTop,
    firstNumberBottom: newFirstBottom,
    secondNumberTop: newSecondTop,
    secondNumberBottom: newSecondBottom,
  };
}
