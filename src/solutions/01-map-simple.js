const scores = [92, 67, 85];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = scores.map(score => (score >= 70 ? 'PASS' : 'FAIL'));

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['PASS', 'FAIL', 'PASS'];

window.FPWorkshop.check(results, expected);
