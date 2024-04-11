import { createStore } from 'redux';
import adReducer from './reducers/adReducer.js';

const store = createStore(adReducer);

export default store;
