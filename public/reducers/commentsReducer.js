import { List, Map } from 'immutable';
import { POST_COMMENT } from '../constants/actionTypes';

const currentStore = new Map();


export default function commentsReducer(state = currentStore, action) {
    switch (action.type) {
    case POST_COMMENT: {
        let list;
        if (state.get(action.id)) {
            list = state.get(action.id);
        } else {
            list = new List();
        }
        let map = new Map();
        map = map.set('author', action.author);
        map = map.set('message', action.message);
        map = map.set('date', action.date);
        list = list.push(map);

        return state.set(action.id, list);
    }
    default:
        return state;
    }
}
