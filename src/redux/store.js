import {createStore} from 'redux';

const initialStates = {};

function reducer(state = initialStates) {
  return state;
}

const store = createStore(reducer);

export default store;
