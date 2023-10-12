import {createStore} from 'redux';
import DayanaCounterReducer from '../redux/reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(DayanaCounterReducer, composeWithDevTools())

export default store