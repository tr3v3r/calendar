import React from 'react';
import dateParseToHumanView from '../parseFunctions/dayParseToHumanView';
import '../styles/CalendarMonthAndYear.css';

const CalendarMonthAndYear = props => (
    <div className="calendar-month-and-year">
        {dateParseToHumanView(props.myEvents.get('date'), 'month')}
        <span>{dateParseToHumanView(props.myEvents.get('date'), 'year')}</span>
    </div>
);

export default CalendarMonthAndYear;
