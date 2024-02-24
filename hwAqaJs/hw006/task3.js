const divide = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error("Couldn't divide for zero");
  }
  if (typeof numerator !== 'number' || typeof denominator !== 'number' || isNaN(numerator) || isNaN(denominator)) {
    throw new Error("Numerator or denominator isn't type of number");
  }
  return numerator / denominator;
};
try {
  console.log('Result divide = ', divide(10, 4));
} catch (e) {
  console.log(e.name, e.message);
} finally {
  console.log('Work is finished');
}

try {
  console.log('Result divide = ', divide(10, 0));
} catch (e) {
  console.log(e.name, e.message);
} finally {
  console.log('Work is finished');
}

try {
  console.log('Result divide = ', divide(10, true));
} catch (e) {
  console.log(e.name, e.message);
} finally {
  console.log('Work is finished');
}
