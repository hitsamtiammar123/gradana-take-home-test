import {createStore, applyMiddleware, combineReducers} from 'redux';
import dropdownReducer from './dropdown/dropDownReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  dropdown: dropdownReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
