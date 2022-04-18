import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import homepage from './homepage';

export const history = createBrowserHistory();

const reducer = combineReducers({
  homepage,
  router: connectRouter(history),
});

export default reducer;