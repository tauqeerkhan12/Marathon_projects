
import { createStore,combineReducers, applyMiddleware } from 'redux';
import OpenFeature from './reducers/openFeature.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    OpenFeature,    
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));