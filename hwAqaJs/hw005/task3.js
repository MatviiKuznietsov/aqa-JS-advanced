function checkOrder(available, ordered) {
  if (available < ordered) {
    return 'Your order is too large, we don’t have enough goods';
  } if (ordered === 0) {
    return 'Your order is empty';
  } if (ordered <= available) {
    return 'Your order is accepted';
  }
}

console.log(checkOrder(5, 6));
console.log(checkOrder(5, 0));
console.log(checkOrder(6, 5));
