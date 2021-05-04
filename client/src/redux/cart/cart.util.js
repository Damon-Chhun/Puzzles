export const addItemToCart = (cartItems, cartItemsToAdd) => {
  console.log(cartItems, cartItemsToAdd);
  const existingCartItem = cartItems.find(
    cartItems => cartItems._id === cartItemsToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem._id === cartItemsToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItem = (cartItem, itemToRemove) => {
  const existingItems = cartItem.find(item => item._id === itemToRemove._id);

  if (existingItems.quantity === 1) {
    return cartItem.filter(item => item._id !== itemToRemove._id);
  }

  return cartItem.map(item =>
    item._id === itemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
