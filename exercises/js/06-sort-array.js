const scores = [96, 65, 67, 72, 91];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.sort (see https://mzl.la/19buNlz)
let results = [...scores]; // Clone the array
let done = false;
while (!done) {
  done = true;

  for (let index = 1; index < results.length; index++) {
    if (results[index - 1] > results[index]) {
      const temp = results[index - 1];

      results[index - 1] = results[index];
      results[index] = temp;
      done = false;
    }
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [65, 67, 72, 91, 96];

window.FPWorkshop.check(results, expected);
