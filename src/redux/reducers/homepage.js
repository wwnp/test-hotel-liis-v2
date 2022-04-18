import { RATE } from "../../config";
import { END_LOADING, SET_FAV, SET_HOTELS, SET_MODE_RATE, SET_PAGE, SET_REQUEST, START_LOADING } from "../contants";
import { PRICE } from './../../config';
import { SET_MODE_PRICE } from './../contants';

const initialState = {
  hotels: [],
  loading: true,
  favs: [],
  request: {
    location: 'Москва',
    date: (new Date()).toISOString().split('T')[0],
    days: 1,
  },
  favMode: PRICE,
  page: 1
};

const homepage = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: payload,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_REQUEST:
      return {
        ...state,
        request: payload,
      };
    case SET_FAV:
      return {
        ...state,
        favs: payload
      }
    case SET_MODE_RATE:
      return {
        ...state,
        favMode: RATE
      }
    case SET_MODE_PRICE:
      return {
        ...state,
        favMode: PRICE
      }
    case SET_PAGE:
      return {
        ...state,
        page: payload
      }
    default: return state;
  }
};

export default homepage;