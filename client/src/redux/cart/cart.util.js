export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItem = (cartItem, itemToRemove) => {
  const existingItems = cartItem.find(item => item.id === itemToRemove.id);

  if (existingItems.quantity === 1) {
    return cartItem.filter(item => item.id !== itemToRemove.id);
  }

  return cartItem.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
