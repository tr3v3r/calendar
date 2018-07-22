import { Map } from 'immutable';
import { TOGGLE_EVENTS_FOR_MODAL_WINDOW } from '../constants/actionTypes';

const currentStore = new Map();


export default function modalWindowReducer(state = currentStore, action) {
    switch (action.type) {
    case TOGGLE_EVENTS_FOR_MODAL_WINDOW: {
        if (state.get('modalEvents')) {
            return state.delete('modalEvents');
        }
        return state.set('modalEvents', action.payload);
    }
    default:
        return state;
    }
}
