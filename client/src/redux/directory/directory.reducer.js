const INITIAL_STATE = {
  collections: [
    {
      title: "Phones",
      imageUrl:
        "https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHBob25lc3xlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 1,
      linkUrl: "shop/phones",
    },
    {
      title: "Laptops",
      imageUrl:
        "https://images.unsplash.com/photo-1587545694326-6359f26f3dcc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjE5fHxsYXB0b3BzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600",
      id: 2,
      linkUrl: "shop/laptops",
    },
    {
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1502383978052-700eb1d18aa1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhdHN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
    {
      title: "Shoes",
      imageUrl:
        "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      size: "large",
      id: 6,
      linkUrl: "shop/shoes",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
