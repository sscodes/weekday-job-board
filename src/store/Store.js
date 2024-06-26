import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducers from '../reducers';

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

export default store;