import parseBackEndData from '../parseFunctions/parseBackEndData';
import { INITIAL_REQUEST,
        EVENT_DETAIL_REQUEST,
        GET_LOCATION_REQUEST,
        EVENT_DATA_RECIEVED,
        LOCATION_RECIEVED,
        INITIAL_DATA_RECIEVED,
        SORT_EVENTS_BY_DATE } from '../constants/actionTypes';

const getData = () => next => (action) => {
    switch (action.type) {
    case INITIAL_REQUEST:
        fetch('http://128.199.53.150/events')
        .then(response => response.json())
        .then((result) => {
            next({ type: INITIAL_DATA_RECIEVED, payload: result });
            next({ type: SORT_EVENTS_BY_DATE, payload: result });
        });
        break;

    case EVENT_DETAIL_REQUEST: {
        let eventObj;
        fetch(`http://128.199.53.150/events/${action.payload}`)
        .then(response => response.json())
        .then((result) => {
            eventObj = result;
            return Promise.all(result.speakers.map(item => (
                fetch(`http://128.199.53.150/trainers/${item}`)
                .then(resp => resp.json())
            )));
        })
        .then(speakers => parseBackEndData(eventObj, speakers))
        .then((resultObject) => {
            next({ type: EVENT_DATA_RECIEVED, payload: resultObject });
        });
        break; }

    case GET_LOCATION_REQUEST:
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${action.payload}&key=AIzaSyBCLPCJVRbT-G7hZzeD8w81A9ank2LydVk&callback`)
            .then(response => response.json()).then(r => r.results[0].geometry.location)
            .then((location) => {
                next({ type: LOCATION_RECIEVED, payload: location });
            });
        break;
    default:
        return next(action);
    }
};

export default getData;
