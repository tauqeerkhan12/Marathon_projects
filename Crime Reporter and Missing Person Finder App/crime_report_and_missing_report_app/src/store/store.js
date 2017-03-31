
import { createStore } from 'redux';
import CollectInfo from './reducers/collectinfo.js';

export const Store = createStore(CollectInfo);