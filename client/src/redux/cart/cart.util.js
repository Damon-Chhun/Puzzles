export const addItemToCart = (cartItems, cartItemsToAdd) => {
  console.log(cartItems, cartItemsToAdd);
  console.log("hello");
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
  console.log(cartItem, itemToRemove);
  const existingItems = cartItem.products.findIndex(
    item => item.productID === itemToRemove
  );
  console.log(existingItems);

  if (existingItems !== -1) {
    console.log(existingItems, cartItem.products.length);
    cartItem.products.splice(existingItems, 1);
    console.log(cartItem);
    return cartItem;
  }
};

export const addItemToUnAuthCart = (cartItems, cartItemsToAdd) => {
  console.log(cartItems, cartItemsToAdd);

  const existingCartItem = cartItems.findIndex(
    cartItems => cartItems.productID === cartItemsToAdd.productID
  );

  console.log(existingCartItem);

  if (existingCartItem >= 0) {
    const modifiedCartItems = cartItems.map(cartItem =>
      cartItem.productID === cartItemsToAdd.productID
        ? { ...cartItem, quantity: cartItem.quantity + cartItemsToAdd.quantity }
        : cartItem
    );

    console.log(modifiedCartItems[existingCartItem].quantity);

    if (modifiedCartItems[existingCartItem].quantity < 1) {
      return removeUnAuthItem(modifiedCartItems, cartItemsToAdd.productID);
    } else {
      return modifiedCartItems;
    }
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeUnAuthItem = (cartItem, itemToRemove) => {
  console.log(cartItem, itemToRemove);
  const existingItems = cartItem.findIndex(
    item => item.productID === itemToRemove
  );
  console.log(existingItems);

  if (existingItems >= 0) {
    console.log(existingItems, cartItem.length);
    cartItem.splice(existingItems, 1);
    console.log(cartItem);
    return cartItem;
  }
};

export const removeUnAuthItemAction = (cartItem, itemToRemove) => {
  console.log(cartItem, itemToRemove);
  const existingItems = cartItem.products.findIndex(
    item => item.productID === itemToRemove
  );
  console.log(existingItems);

  if (existingItems >= 0) {
    console.log(existingItems, cartItem.products.length);
    cartItem.products.splice(existingItems, 1);
    console.log(cartItem);
    return cartItem;
  }
};
