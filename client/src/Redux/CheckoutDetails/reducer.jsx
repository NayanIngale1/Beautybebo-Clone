import { ADD_CHECKOUT_DETAILS } from "./action";

const init = {
  userCheckoutAddress: {},
};

export const CheckoutReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_CHECKOUT_DETAILS:
      return {
        ...store,
        userCheckoutAddress: payload,
      };
    default:
      return store;
  }
};
