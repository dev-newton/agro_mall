import { CREATE_MARKET } from "../actions/market";

const initialState = {
  markets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MARKET:
      return {
        ...state,
        markets: state.markets.concat(action.market),
      };

    default:
      return state;
  }
  // return state;
};
