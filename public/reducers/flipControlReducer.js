import { Map } from 'immutable';
import { FLIP_EVENT, FLIP_LEGEND } from '../constants/actionTypes';

const initialState = new Map();

export default function flipControlReducer(state = initialState, action) {
    switch (action.type) {
    case FLIP_EVENT: {
        if (state.get('eventIsFlipped')) {
            return state.set('eventIsFlipped', false);
        }
        return state.set('eventIsFlipped', true);
    }
    case FLIP_LEGEND: {
        if (state.get('legendIsFlipped')) {
            return state.set('legendIsFlipped', false);
        }
        return state.set('legendIsFlipped', true);
    }
    default:
        return state;
    }
}
