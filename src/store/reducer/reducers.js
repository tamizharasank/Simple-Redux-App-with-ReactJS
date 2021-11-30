// reducers
import { combineReducers } from 'redux';
import { INCR, DECR, SET_DATA, REM_DATA } from "../action/actions";

const stateVal = {
    count: 0
};

const reducer = (state = stateVal, action) => {
    switch (action.type) {
        case INCR:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECR:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            {
                return state;
            }
    }
};

const dataReducer = (state = {data: []}, action) => {
    switch (action.type) {
        case SET_DATA:            
            return { ...state, data: action.data };
        case REM_DATA:
            return { data: null };
        default:
            return state;
    }
};

const root_reducer = combineReducers({
    counter: reducer,
    storage: dataReducer
});

export default root_reducer;