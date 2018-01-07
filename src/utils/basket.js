import { INCREASE, DECREASE } from "./constants";
import { deliveryThreshold, deliveryCost } from "./config";

export const addToBasket = (initialBasket, product) => {
  const { name, code, price, image } = product;
  const basket = [...initialBasket];
  const index = basket.findIndex(element => element.code === code);
  if (index > -1) {
    basket[index].qty = basket[index].qty + 1;
  } else {
    basket.push({ name, code, price, image, qty: 1 });
  }
  return basket;
};

export const removeFromBasket = (initialBasket, code) =>
  initialBasket.filter(item => item.code !== code);

export const updateBasket = (initialBasket, update) => {
  const { code, action } = update;
  const basket = [...initialBasket];
  const index = basket.findIndex(element => element.code === code);
  let change = 0;
  if (index > -1) {
    if (action === DECREASE) {
      if (basket[index].qty > 1) {
        change = -1;
      } else {
        return removeFromBasket(initialBasket, code);
      }
    } else if (action === INCREASE) {
      change = 1;
    }
    basket[index].qty = basket[index].qty + change;
  }
  return basket;
};

export const getBasketTotal = basket => {
  if (basket.length === 0) {
    return 0;
  }
  return basket.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);
};

export const getBasketQty = basket => {
  if (basket.length === 0) {
    return 0;
  }
  return basket.reduce((accumulator, current) => {
    return accumulator + current.qty;
  }, 0);
};

export const getDeliveryCost = total => {
  return total < deliveryThreshold ? deliveryCost : 0;
};
