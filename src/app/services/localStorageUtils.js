// localStorageUtils.js

export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [{subtotal: 0, total: 0, shipping: 0}];
  };
  
  export const updateCartInLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const getUserFromLocalStorage = () => {
    const loggedUser = localStorage.getItem("user");
    return loggedUser && loggedUser.length > 2 ? JSON.parse(loggedUser) : {};
  };
  
  export const updateUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  export const getPlantsStockFromLocalStorage = () => {
    const stock = localStorage.getItem('stock');
    return stock ? JSON.parse(stock) : null;
  };
  
  export const updatePlantsStockInLocalStorage = (plantsStock) => {
    localStorage.setItem("stock", JSON.stringify(plantsStock));
  };
  