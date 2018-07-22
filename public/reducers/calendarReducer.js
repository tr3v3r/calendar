import { Record } from 'immutable';
import InitialStateObject from './stateObject';
import { INITIAL_DATA_RECIEVED, CHANGE_MONTH, TOGGLE_WEEK_MONTH, CHANGE_WEEK } from '../constants/actionTypes';


const ImmutebleConstructor = Record(InitialStateObject);
const immutableState = new ImmutebleConstructor();

export default function calendarReducer(state = immutableState, action) {
    switch (action.type) {
    case INITIAL_DATA_RECIEVED: {
        return state.set('events', action.payload);
    }
    case CHANGE_MONTH: {
        const currentDate = state.get('date');
        const currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        if (action.payload === 'left ') {
            currentMonth -= 1;
        } else if (action.payload === 'right') {
            currentMonth += 1;
        } else {
            return state.set('date', new Date());
        }
        return state.set('date', new Date(currentYear, currentMonth));
    }
    case TOGGLE_WEEK_MONTH: {
        const currentView = state.get('currentView');
        let newState = state.set('currentView', state.get('nextView'));
        newState = newState.set('nextView', currentView);

        if (currentView === 'Month') {
            newState = newState.set('weekStartDate', newState.setWeekStartDate());
            newState = newState.set('currentWeek', newState.getDatesForWeek());
        }
        return newState;
    }

    case CHANGE_WEEK: {
        const currentWeekStartDate = state.get('weekStartDate');
        let newState;
        if (action.payload === 'left ') {
            currentWeekStartDate.setDate((currentWeekStartDate.getDate() - 7));
        } else if (action.payload === 'right') {
            currentWeekStartDate.setDate((currentWeekStartDate.getDate() + 7));
        } else {
            newState = state.set('date', new Date());
            newState = newState.set('weekStartDate', newState.setWeekStartDate());
            return newState.set('currentWeek', newState.getDatesForWeek());
        }

        newState = state.set('weekStartDate', currentWeekStartDate);
        const nextMonth = new Date(currentWeekStartDate.getTime() + 604800000);
        newState = newState.set('date', nextMonth);
        return newState.set('currentWeek', newState.getDatesForWeek());
    }
    default:
        return state;
    }
}
