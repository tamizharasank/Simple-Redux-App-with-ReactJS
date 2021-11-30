import * as redux from 'redux';
import reducer from './reducer/reducers';
import thunk from 'redux-thunk';

// stores

const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

export default store;