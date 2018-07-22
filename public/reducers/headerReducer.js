import { Map } from 'immutable';
import { CHANGE_HEADER_NAV_VISIBILITY } from '../constants/actionTypes';

const initialState = new Map({ visibility: false });

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_HEADER_NAV_VISIBILITY: {
        if (state.get('visibility')) {
            return state.set('visibility', false);
        }

        return state.set('visibility', true);
    }
    default:
        return state;
    }
}
