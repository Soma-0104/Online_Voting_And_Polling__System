import { createStore } from 'redux';
import rootReducer from '../Features/reducers';

const store = createStore(rootReducer);

export default store;
