export const addItemToCart = (cartItems, cartItemsToAdd) => {
  console.log(cartItems, cartItemsToAdd);
  const existingCartItem = cartItems.find(
    cartItems => cartItems.productID === cartItemsToAdd.productID
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.productID === cartItemsToAdd.productID
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItem = (cartItem, itemToRemove) => {
  const existingItems = cartItem.find(
    item => item.productID === itemToRemove.productID
  );

  if (existingItems.quantity === 1) {
    return cartItem.filter(item => item.productID !== itemToRemove.productID);
  }

  return cartItem.map(item =>
    item.productID === itemToRemove.productID
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
