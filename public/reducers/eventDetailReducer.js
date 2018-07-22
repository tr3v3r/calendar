import { Map } from 'immutable';
import { EVENT_DATA_RECIEVED, MAKE_EVENT_DETAIL_VISIBILE, MAKE_EVENT_DETAIL_INVISIBILE, REMOVE_EVENT, LOCATION_RECIEVED } from '../constants/actionTypes';

const currentStore = new Map();

export default function eventDetailReducer(state = currentStore, action) {
    switch (action.type) {
    case EVENT_DATA_RECIEVED: {
        return state.set('currEvent', action.payload);
    }

    case MAKE_EVENT_DETAIL_VISIBILE: {
        return state.set('visibility', true);
    }

    case MAKE_EVENT_DETAIL_INVISIBILE: {
        return state.set('visibility', false);
    }

    case REMOVE_EVENT: {
        return state.delete('currEvent');
    }

    case LOCATION_RECIEVED: {
        return state.set('location', action.payload);
    }
    default:
        return state;
    }
}
