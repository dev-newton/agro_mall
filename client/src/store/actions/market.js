export const CREATE_MARKET = "CREATE_MARKET";

export const createMarket = (newMarket) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_MARKET,
      market: newMarket,
    });
  };
};
