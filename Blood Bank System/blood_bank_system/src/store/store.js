
import { createStore } from 'redux';
import CollectInfo from './reducers/collectinfo.js';
import Filter from './reducers/filter.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    CollectInfo,
    Filter
})

export const Store = createStore(rootReducer);