import React from 'react';
import { push } from 'react-router-redux';
import store from '../index';
import '../styles/Event.css';
import parseEventTypeForEventPane from '../parseFunctions/parseEventTypeForEventPane';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.eventClickHandler = this.eventClickHandler.bind(this);
        this.eventTouchStartHandler = this.eventTouchStartHandler.bind(this);
        this.eventTouchEndHandler = this.eventTouchEndHandler.bind(this);
    }

    eventClickHandler() {
        if (!this.props.modalWindow.get('modalEvents')) {
            if (this.props.myEvents.get('currentView') === 'Month') {
                store.dispatch(push(`${this.props.event.type}/${this.props.event.id}`));
            } else {
                this.props.makeEventDetailsVisible();
                this.props.removeEvent();
                this.props.getEventDetail(this.props.event.id);
            }
        }
    }

    eventTouchStartHandler(e) {
        this.xStart = e.nativeEvent.touches[0].clientX;
    }

    eventTouchEndHandler(e) {
        const xEnd = e.nativeEvent.changedTouches[0].clientX;
        const xDiff = Math.abs(this.xStart - xEnd);
        if (xDiff < 30) {
            this.eventClickHandler();
        }
    }

    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        let isActiveNow;
        if (this.props.eventDetails && this.props.eventDetails.get('currEvent')) {
            isActiveNow = this.props.event.id === this.props.eventDetails.get('currEvent').id;
        }
        const hasSiblings = this.props.hasSiblings;
        const eventType = (hasSiblings || isMobile)
         ? parseEventTypeForEventPane(this.props.event.type)
         : this.props.event.type;
        const date = new Date(this.props.event.start);
        const flipped = this.props.flipControl.get('eventIsFlipped');

        return (
            <div
              className={`${isActiveNow ? 'active-event' : ''} calendar-event-item`}
              onClick={this.eventClickHandler}
              onTouchStart={this.eventTouchStartHandler}
              onTouchEnd={this.eventTouchEndHandler}
            >
                <div className={`${flipped ? 'flipped' : ''} card`}>
                    <div className={`ceil-${this.props.event.type} front`}>
                        <span className={`${!hasSiblings ? 'single-events-mobile' : ''} ceil-event-type capitalize`}>{eventType}<br />
                            <span className={`${isMobile ? 'hidden' : 'ceil-event-time'}`}>{date.toString().slice(16, 21)}</span>
                        </span>
                    </div>
                    <div className={`ceil-${this.props.event.type} back`}>
                        <span className="ceil-event-time">{date.toString().slice(16, 21)}</span>
                    </div>
                </div>
            </div>
        );
    }
}
