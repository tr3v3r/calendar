import { Map } from 'immutable';
import { UPDATE_DEVICE_SCREEN_WIDTH } from '../constants/actionTypes';

const currentStore = new Map();

export default function deviceScreenWidthReducer(state = currentStore, action) {
    switch (action.type) {
    case UPDATE_DEVICE_SCREEN_WIDTH: {
        let newState = state.set('deviceWidth', document.documentElement.clientWidth);
        newState = newState.set('ceilHeight', document.documentElement.clientHeight * 0.135);
        let allowedAmountEventsPerCeil;
        if (newState.get('deviceWidth') <= 768) {
            allowedAmountEventsPerCeil = 3;
        } else if (newState.get('deviceWidth') > 768 && newState.get('deviceWidth') < 970) {
            allowedAmountEventsPerCeil = 4;
        } else {
            allowedAmountEventsPerCeil = 6;
        }
        newState = newState.set('allowedAmountEventsPerCeil', allowedAmountEventsPerCeil);
        return newState.set('isMobileDevice', newState.get('deviceWidth') <= 768);
    }
    default:
        return state;
    }
}
