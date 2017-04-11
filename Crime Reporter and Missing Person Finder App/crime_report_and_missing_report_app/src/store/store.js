
import { createStore,combineReducers, applyMiddleware } from 'redux';
import OpenFeature from './reducers/openFeature.js';
import validation from './reducers/validation.js';
import Tabs from './reducers/tab.js'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    OpenFeature,
    validation,
    Tabs    
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));