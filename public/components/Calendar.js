import React from 'react';
import Legend from './Legend';
import CalendarController from './CalendarController';
import CalendarMonthAndYear from './CalendarMonthAndYear';
import Table from './Table';
import EventDetails from './EventDetails';
import '../styles/Calendar.css';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
    }

    touchStartHandler(e) {
        this.xStart = e.nativeEvent.touches[0].clientX;
        this.yStart = e.nativeEvent.touches[0].clientY;
    }

    touchEndHandler(e) {
        const xEnd = e.nativeEvent.changedTouches[0].clientX;
        const yEnd = e.nativeEvent.changedTouches[0].clientY;
        const xDiff = this.xStart - xEnd;
        const yDiff = this.yStart - yEnd;
        let direction;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 40) {
                direction = 'right';
            } else if (xDiff < -40) {
                direction = 'left ';
            }
        }
        if (!direction) return;
        if (!e.nativeEvent.target.closest('.event-details-map')) {
            if (this.props.myEvents.get('currentView') === 'Month') {
                this.props.changeMonth(direction);
            } else if (this.props.myEvents.get('currentView') === 'Week') {
                this.props.changeWeek(direction);
            }
        }
    }

    render() {
        const currentView = this.props.myEvents.get('currentView');
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        const ceilHeight = this.props.deviceScreenWidth.get('ceilHeight');
        const eventDetailsWeekStyles = isMobile ? { height: `${ceilHeight * 5}px` } : {};

        const isWeekViewNow = currentView === 'Week';
        const isEventDetailForWeekViewVisible = this.props.eventDetails.get('visibility');
        const isReadyToShowDetails = isWeekViewNow && isEventDetailForWeekViewVisible;
        return (
            <section className="container">
                <div onTouchEnd={this.touchEndHandler} onTouchStart={this.touchStartHandler} className="calendar-wrapper">
                    <Legend
                      flipControl={this.props.flipControl}
                    />
                    {!isMobile &&
                        <CalendarController
                          myEvents={this.props.myEvents}
                          toggleMonthWeek={this.props.toggleMonthWeek}
                          deviceScreenWidth={this.props.deviceScreenWidth}
                          changeMonth={this.props.changeMonth}
                          changeWeek={this.props.changeWeek}
                        />
                    }

                    {!isMobile &&
                        (<CalendarMonthAndYear
                          myEvents={this.props.myEvents}
                        />)
                    }

                    {!this.props.myEvents.get('events').length &&
                    <div className="loader" />}
                    <Table
                      ceilEvents={this.props.ceilEvents}
                      myEvents={this.props.myEvents}
                      eventDetails={this.props.eventDetails}
                      getEventDetail={this.props.getEventDetail}
                      removeEvent={this.props.removeEvent}
                      makeEventDetailsVisible={this.props.makeEventDetailsVisible}
                      makeEventDetailsInvisible={this.props.makeEventDetailsInvisible}
                      flipControl={this.props.flipControl}
                      changeMonth={this.props.changeMonth}
                      changeWeek={this.props.changeWeek}
                      toggleModalWindow={this.props.toggleModalWindow}
                      deviceScreenWidth={this.props.deviceScreenWidth}
                      modalWindow={this.props.modalWindow}
                    />
                    <div className={`${isWeekViewNow ? 'week-view-event-details' : 'zero-height'}`} style={eventDetailsWeekStyles}>
                        {isReadyToShowDetails &&
                            <EventDetails
                              event={this.props.eventDetails}
                              comments={this.props.comments}
                              getLocation={this.props.getLocation}
                              removeEvent={this.props.removeEvent}
                              postMessage={this.props.postMessage}
                            />
                            }
                    </div>
                    {isMobile &&
                        <CalendarController
                          flipEvent={this.props.flipEvent}
                          flipLegend={this.props.flipLegend}
                          myEvents={this.props.myEvents}
                          changeMonth={this.props.changeMonth}
                          changeWeek={this.props.changeWeek}
                          toggleMonthWeek={this.props.toggleMonthWeek}
                          deviceScreenWidth={this.props.deviceScreenWidth}
                        />
                    }
                </div>
            </section>
        );
    }
}
