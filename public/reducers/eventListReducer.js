import { Map } from 'immutable';
import { CHANGE_EVENT_PANE_VISIBILITY } from '../constants/actionTypes';

const initialState = new Map({ visibility: true });

export default function eventListReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_EVENT_PANE_VISIBILITY: {
        if (state.get('visibility')) {
            return state.set('visibility', false);
        }

        return state.set('visibility', true);
    }
    default:
        return state;
    }
}
