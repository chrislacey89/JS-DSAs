function rollDice(diceString) {
    const combinedDice = diceString.split("+").map((diceCombo) => {
      const [multiplier, number] = diceCombo.split("d");
      let total = 0;
      for (let i = 0; i < multiplier; i++) {
        total += randomNumber(number);
      }
      return total;
    });
    return combinedDice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
  function randomNumber(number) {
    if (typeof number === "string") {
      number = parseInt(number);
    }
    return Math.ceil(Math.random() * number);
  }
  
  console.log(rollDice("2d4"));
  