import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import calendarReducer from './calendarReducer';
import eventDetailReducer from './eventDetailReducer';
import commentsReducer from './commentsReducer';
import eventListReducer from './eventListReducer';
import headerReducer from './headerReducer';
import flipControlReducer from './flipControlReducer';
import ceilEventReducer from './ceilEventReducer';
import modalWindowReducer from './modalWindowReducer';
import deviceScreenWidthReducer from './deviceScreenWidthReducer';

export default combineReducers({
    calendar: calendarReducer,
    eventDetails: eventDetailReducer,
    router: routerReducer,
    comments: commentsReducer,
    eventListVisibilty: eventListReducer,
    headerNavIsVisible: headerReducer,
    flipControl: flipControlReducer,
    ceilEvents: ceilEventReducer,
    modalWindow: modalWindowReducer,
    deviceScreenWidth: deviceScreenWidthReducer,
});
