Function.prototype.myCall = function (thisContext, ...args) {
  // In this function, `this` is the original function.

  // In order to have `thisContext` be the `this` context
  // of the original function, we set the function (`this`)
  // to be a value on `thisContext`, and we use a symbol to
  // prevent any key collisions on `thisContext`.
  const symbol = Symbol();
  thisContext[symbol] = this;

  const returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];

  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  // In this function, `this` is the original function.
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  // In this function, `this` is the original function.
  return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);

  // Below is an alternative solution using `myCall`.
  // return (...newArgs) => this.myCall(thisContext, ...args, ...newArgs);
};

const obj = { num: 0 };

function logNums(x, y) {
  console.log(this.num, x, y);
}

logNums.myCall(obj, 1, 2);

logNums.myApply(obj, [1, 2]);

const boundFunction = logNums.myBind(obj, 1);
boundFunction(2);

// 0 1 2
// 0 1 2
// 0 1 2
