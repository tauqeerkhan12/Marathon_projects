
import { createStore } from 'redux';
import CollectInfo from './reducers/collectinfo.js';
import OpenFeature from './reducers/openFeature.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    CollectInfo,
    OpenFeature
})

export const Store = createStore(rootReducer);