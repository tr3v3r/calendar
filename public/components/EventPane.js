import React from 'react';
import { push } from 'react-router-redux';
import store from '../index';
import dateToTimeGapFunction from '../parseFunctions/dateToTimeGapFunction';
import dayParseToHumanView from '../parseFunctions/dayParseToHumanView';
import parseEventTypeForEventPane from '../parseFunctions/parseEventTypeForEventPane';
import '../styles/EventPane.css';

export default class EventPane extends React.Component {
    constructor(props) {
        super(props);
        this.goToEventDetailHandler = this.goToEventDetailHandler.bind(this);
    }

    goToEventDetailHandler() {
        store.dispatch(push(`${this.props.event.type}/${this.props.event.id}`));
    }

    render() {
        const visibility = this.props.visibility;
        const date = new Date(this.props.event.start);
        const event = this.props.event;
        const eventType = parseEventTypeForEventPane(event.type);
        return (
            <div onClick={this.goToEventDetailHandler} className={`${+date >= new Date() ? '' : (visibility ? 'past-event' : 'hiden')} event-list-item`}>
                <div className="event-list-item-type">
                    {eventType}
                </div>
                <div className="event-list-item-date">
                    <h2>{date.getDate()}</h2>
                    <span>{`${date.toString().slice(4, 7)} ${date.getFullYear()}`}</span>
                </div>
                <div className="event-list-item-title">
                    <h2 className="capitalize">{event.title}</h2>
                    <span className="capitalize">{`${event.type} on ${dayParseToHumanView(date, 'day')} ${dateToTimeGapFunction(event.start, event.duration, event.type)}`}</span>
                </div>

            </div>
        );
    }
}
