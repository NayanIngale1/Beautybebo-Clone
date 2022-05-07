// action type

export const ADD_CHECKOUT_DETAILS = "ADD_CHECKOUT_DETAILS";

//action creator

export const addCheckoutDetails = (userAddress) => {
  return {
    type: ADD_CHECKOUT_DETAILS,
    payload: userAddress,
  };
};
