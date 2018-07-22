import React from 'react';
import '../styles/CalendarController.css';


export default class CalendarController extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMonthWeekHandler = this.toggleMonthWeekHandler.bind(this);
        this.changeMonthClick = this.changeMonthClick.bind(this);
        this.flipEventTouchStartHandler = this.flipEventTouchStartHandler.bind(this);
        this.flipLegendTouchStartHandler = this.flipLegendTouchStartHandler.bind(this);
    }

    flipEventTouchStartHandler(e) {
        e.preventDefault();
        this.props.flipEvent();
    }

    flipLegendTouchStartHandler(e) {
        e.preventDefault();
        this.props.flipLegend();
    }

    changeMonthClick(e) {
        const target = e.nativeEvent.target.closest('button');
        if (this.props.myEvents.get('currentView') === 'Month') {
            this.props.changeMonth(target.dataset.control);
        } else if (this.props.myEvents.get('currentView') === 'Week') {
            this.props.changeWeek(target.dataset.control);
        }
    }

    toggleMonthWeekHandler() {
        this.props.toggleMonthWeek();
    }

    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        return (
            <div className="calendar-control-panel">
                <button className={`${isMobile ? 'calendar-control-btn-mobile' : 'calendar-control-btn-desctop'} calendar-control-btn`} data-control="today" onClick={this.changeMonthClick}>Today</button>
                <button className={`${isMobile ? 'calendar-control-btn-mobile' : 'calendar-control-btn-desctop'} calendar-control-btn`} onClick={this.toggleMonthWeekHandler}>{this.props.myEvents.get('nextView')}</button>
                <button className={`${isMobile ? 'calendar-control-btn-mobile' : 'hidden'} calendar-control-btn`} onTouchStart={this.flipLegendTouchStartHandler} onTouchEnd={this.flipLegendTouchStartHandler}>Legend</button>
                <button onTouchStart={this.flipEventTouchStartHandler} onTouchEnd={this.flipEventTouchStartHandler} className={`${isMobile ? 'calendar-control-btn-mobile' : 'hidden'} calendar-control-btn`}>Time</button>
            </div>
        );
    }
}
