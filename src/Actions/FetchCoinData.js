import { LOADING_COIN_DATA, LOADED_COIN_DATA, LOAD_FAILED } from '../Utils/ActionTypes';
import axios from 'axios';
import { apiBaseUrl } from '../Utils/Constants';

export const fetchCoinData = () => {
  return async (dispatch) => {

    dispatch({ type: LOADING_COIN_DATA })

    try {
      const coinData = await axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`);
      // console.log('coindata: ', coinData);
      dispatch({ type: LOADED_COIN_DATA, payload: coinData.data })
    } catch (err) {
      console.log(err);
      dispatch({ type: LOAD_FAILED, payload: err.data })
    }
  }
}

