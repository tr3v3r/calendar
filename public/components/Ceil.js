import React from 'react';
import Event from './Event';
import { checkIfItIsCurrentDate } from '../parseFunctions/filterEventsByCurrentDate';

export default class Ceil extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModWindClickHandler = this.toggleModWindClickHandler.bind(this);
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
    }

    toggleModWindClickHandler() {
        const ceil = this.props.ceil;
        const todayEvents = this.props.ceilEvents.get(ceil.dateKey);
        if (todayEvents) {
            this.props.toggleModalWindow(todayEvents);
        }
    }

    touchStartHandler(e) {
        e.preventDefault();
        this.timer = setTimeout(this.toggleModWindClickHandler, 500);
    }

    touchEndHandler() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        const ceilHeight = this.props.deviceScreenWidth.get('ceilHeight');
        const myEvents = this.props.myEvents;
        const ceil = this.props.ceil;
        const flipped = this.props.flipControl.get('eventIsFlipped');
        const isCurrentDate = checkIfItIsCurrentDate(ceil);
        const allowedAmountEventsPerCeil = this.props.deviceScreenWidth.get('allowedAmountEventsPerCeil');
        let ceilClassName = '';
        if (myEvents.get('currentView') !== 'Week') {
            ceilClassName = `${ceil.isCurrentMonth ? 'this-month-ceil' : 'not-this-month-ceil'}`;
        } else {
            ceilClassName = 'this-month-ceil';
        }
        ceilClassName = `${ceilClassName} ${isCurrentDate ? 'current-date-ceil' : ''}`;

        const todayEvents = this.props.ceilEvents.get(ceil.dateKey);
        let fullFilled;
        let template;
        if (todayEvents) {
            fullFilled = todayEvents.size > allowedAmountEventsPerCeil;
            template = todayEvents.slice(0, allowedAmountEventsPerCeil).map(item => (
                <Event
                  key={item.id}
                  hasSiblings={todayEvents.size - 1}
                  event={item}
                  eventDetails={this.props.eventDetails}
                  myEvents={myEvents}
                  getEventDetail={this.props.getEventDetail}
                  removeEvent={this.props.removeEvent}
                  makeEventDetailsVisible={this.props.makeEventDetailsVisible}
                  flipControl={this.props.flipControl}
                  deviceScreenWidth={this.props.deviceScreenWidth}
                  modalWindow={this.props.modalWindow}
                />
        ));
        } else {
            ceilClassName = `${ceilClassName} empty-ceil`;
        }

        const tdStyles = isMobile ? { height: `${ceilHeight}px` } : {};
        return (
            <td className={ceilClassName} style={tdStyles}>
                <div
                  className={`${fullFilled ? 'fullfilled-ceil-events-wrapper' : ''} ceil-events-wrapper`}
                  onTouchStart={this.touchStartHandler}
                  onTouchEnd={this.touchEndHandler}
                >
                    <span onClick={this.toggleModWindClickHandler} className={`${todayEvents && flipped ? 'hidden' : 'ceil-date'}`}>{ceil.date}</span>
                    {template}
                </div>
            </td>
        );
    }
}
