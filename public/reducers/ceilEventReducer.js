import { List, Map } from 'immutable';
import { SORT_EVENTS_BY_DATE } from '../constants/actionTypes';

const currentStore = new Map();


export default function ceilEventReducer(state = currentStore, action) {
    switch (action.type) {
    case SORT_EVENTS_BY_DATE: {
        let newState = state;
        const events = action.payload;
        events.sort((a, b) => (
            +new Date(a.start) - +new Date(b.start)
        ));
        const options = { year: 'numeric',
            month: 'numeric',
            day: 'numeric' };
        for (let i = 0; i < events.length; i++) {
            const dateKey = new Date(events[i].start).toLocaleString('en-US', options);
            if (!newState.get(dateKey)) {
                newState = newState.set(dateKey, new List().push(events[i]));
            } else if (newState.get(dateKey).every(item => item.id !== events[i].id)) {
                const newList = newState.get(dateKey).push(events[i]);
                newState = newState.set(dateKey, newList);
            }
        }
        return newState;
    }
    default:
        return state;
    }
}
