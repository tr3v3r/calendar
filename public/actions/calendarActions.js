import {
    CHANGE_MONTH,
    CHANGE_WEEK,
    TOGGLE_WEEK_MONTH,
    EVENT_DETAIL_REQUEST,
    REMOVE_EVENT,
    INITIAL_REQUEST,
    GET_LOCATION_REQUEST,
    POST_COMMENT,
    CHANGE_EVENT_PANE_VISIBILITY,
    CHANGE_HEADER_NAV_VISIBILITY,
    MAKE_EVENT_DETAIL_VISIBILE,
    MAKE_EVENT_DETAIL_INVISIBILE,
    FLIP_EVENT,
    FLIP_LEGEND,
    TOGGLE_EVENTS_FOR_MODAL_WINDOW,
    UPDATE_DEVICE_SCREEN_WIDTH,
} from '../constants/actionTypes';

export function changeMonth(direction) {
    return {
        type: CHANGE_MONTH,
        payload: direction,
    };
}

export function changeWeek(direction) {
    return {
        type: CHANGE_WEEK,
        payload: direction,
    };
}


export function toggleMonthWeek() {
    return {
        type: TOGGLE_WEEK_MONTH,
    };
}


export function getEventDetail(id) {
    return {
        type: EVENT_DETAIL_REQUEST,
        payload: id,
    };
}


export function removeEvent() {
    return {
        type: REMOVE_EVENT,
    };
}

export function renderEvents() {
    return {
        type: INITIAL_REQUEST,
    };
}


export function getLocation(place) {
    return {
        type: GET_LOCATION_REQUEST,
        payload: place,
    };
}

export function postMessage(author, message, id, date) {
    return {
        type: POST_COMMENT,
        author,
        message,
        id,
        date,
    };
}

export function changeVisibity() {
    return {
        type: CHANGE_EVENT_PANE_VISIBILITY,
    };
}

export function changeHeaderNavVisibity() {
    return {
        type: CHANGE_HEADER_NAV_VISIBILITY,
    };
}

export function makeEventDetailsVisible() {
    return {
        type: MAKE_EVENT_DETAIL_VISIBILE,
    };
}

export function makeEventDetailsInvisible() {
    return {
        type: MAKE_EVENT_DETAIL_INVISIBILE,
    };
}

export function flipEvent() {
    return {
        type: FLIP_EVENT,
    };
}

export function flipLegend() {
    return {
        type: FLIP_LEGEND,
    };
}

export function toggleModalWindow(events) {
    return {
        type: TOGGLE_EVENTS_FOR_MODAL_WINDOW,
        payload: events,
    };
}

export function updateCurScreenWidth() {
    return {
        type: UPDATE_DEVICE_SCREEN_WIDTH,
    };
}
