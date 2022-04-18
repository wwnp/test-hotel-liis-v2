import {
  put,
  call,
  takeLatest,
  select,
  takeEvery
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { getHotels } from '../../api';
import {
  CHANGE_PAGE,
  END_LOADING,
  SET_FAV,
  SET_FAV_APP,
  SET_HOTELS,
  SET_PAGE,
  SET_REQUEST
} from '../contants';
import { START_LOADING } from './../contants';
import { pageDomain, MAX_FAVS } from './../../config';

export function* pageFN({ payload }) {
  yield put({ type: SET_PAGE, payload })
}

export function* setFav({ payload }) {
  const favs = yield select(({ homepage }) => homepage?.favs);
  const hotel = payload
  const hotelIndex = favs.findIndex(hotel => hotel.hotelId === payload.hotelId)
  if (hotelIndex < 0) {
    const newItem = {
      ...hotel,
    }
    if (favs.length < MAX_FAVS) {
      yield put({ type: SET_FAV, payload: [...favs, newItem] })
    } else {
      alert('Достигнут лимит избранных отелей')
    }
  }
  else {
    const filteredFavs = favs.filter(hotel => hotel.hotelId !== payload.hotelId)
    yield put({ type: SET_FAV, payload: filteredFavs })
  }
}

export function* fetchHotels() {
  const homepage = yield select(({ homepage }) => homepage);
  const { request } = homepage
  const { location, date, days } = request

  const neededDate = new Date(date)
  const checkOut = new Date()
  checkOut.setDate(neededDate.getDate() + parseInt(days));

  const stringCurrDate = neededDate.toISOString().split('T')[0]
  const stringCheckOut = checkOut.toISOString().split('T')[0]

  const results = yield call(getHotels.bind(null, location, stringCurrDate, stringCheckOut))

  yield put({ type: SET_HOTELS, payload: results })
  yield put({ type: END_LOADING })
}

export function* fetchHots() {
  yield put({ type: START_LOADING })
  const homepage = yield select(({ homepage }) => homepage);
  const { request } = homepage
  const { location, date, days } = request

  const neededDate = new Date(date)
  const checkOut = new Date()
  checkOut.setDate(neededDate.getDate() + parseInt(days));

  const stringCurrDate = neededDate.toISOString().split('T')[0]
  const stringCheckOut = checkOut.toISOString().split('T')[0]

  const results = yield call(getHotels.bind(null, location, stringCurrDate, stringCheckOut))
  yield put({ type: SET_HOTELS, payload: results })
  yield put({ type: END_LOADING })
}

export function* watchNewsSaga() {
  const path = yield select(({ router }) => router.location.pathname);
  if (path === pageDomain) {
    yield call(fetchHotels);
  }
}



export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchNewsSaga);
  yield takeLatest(SET_REQUEST, fetchHots);
  yield takeEvery(SET_FAV_APP, setFav)
  yield takeEvery(CHANGE_PAGE, pageFN)
}