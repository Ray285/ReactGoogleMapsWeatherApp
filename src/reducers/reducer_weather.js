import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            console.log('action.type: ', action.type, 'action.payload.data: ', action.payload.data);
            // Return a new instance of state. We don't ever want to change state directly
            return state.concat([ action.payload.data ]);
            // return [ action.payload.data, ...state ];//ES6 array combination
    }
    return state;
}
