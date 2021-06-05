export function getCartInfo(cartItems) {
  //Calculate SubTotal
  console.log(cartItems);
  const subtotal = cartItems.products
    .reduce(
      (accumulator, element) => accumulator + element.quantity * element.price,
      0
    )
    .toFixed(2);

  // calculate quantity
  const quantity = cartItems.products.reduce(
    (accumulator, element) => accumulator + element.quantity,
    0
  );

  console.log(subtotal, "SUBTOTAL CALCSUBTOTAL ACTION");

  //calculate tax
  const tax = (subtotal * 0.08).toFixed(2);
  console.log(tax, "TAX");

  //Calculate Total
  console.log(subtotal, tax, "SUBTOTAL AND TAX");
  let total = parseFloat(parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  //total = parseFloat(total).toFixed(2);

  return {
    subtotal,
    tax,
    total,
    quantity
  };
}

export function getUnAuthCartInfo(cartItems) {
  //Calculate SubTotal
  console.log(cartItems);
  const subtotal = cartItems
    .reduce(
      (accumulator, element) => accumulator + element.quantity * element.price,
      0
    )
    .toFixed(2);

  // calculate quantity
  const quantity = cartItems.reduce(
    (accumulator, element) => accumulator + element.quantity,
    0
  );

  console.log(subtotal, "SUBTOTAL CALCSUBTOTAL ACTION");

  //calculate tax
  const tax = (subtotal * 0.08).toFixed(2);
  console.log(tax, "TAX");

  //Calculate Total
  console.log(subtotal, tax, "SUBTOTAL AND TAX");
  let total = parseFloat(parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
  //total = parseFloat(total).toFixed(2);

  return {
    subtotal,
    tax,
    total,
    quantity
  };
}
