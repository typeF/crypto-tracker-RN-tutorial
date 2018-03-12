const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
}

export const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADED_COIN_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      });
    case 'LOADING_COIN_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null,
      });
    case 'LOAD_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
}

// export const CoinDataReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'LOADCOINDATA':
//       return action.payload;
//     default:
//       return state;
//   }
// }
