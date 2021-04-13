function getCartInfo(cartItems) {
  //Calculate SubTotal
  const subtotal = cartItems
    .reduce(
      (accumulator, element) => accumulator + element.quantity * element.price,
      0
    )
    .toFixed(2);

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
    total
  };
}

export default getCartInfo;
