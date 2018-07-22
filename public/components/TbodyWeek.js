import React from 'react';
import Row from './Row';

export default class TbodyWeek extends React.Component {
    componentWillUnmount() {
        this.props.makeEventDetailsInvisible();
    }
    render() {
        const myEvents = this.props.myEvents;
        const dates = myEvents.get('currentWeek');
        return (
            <tbody>
                <Row
                  ceilEvents={this.props.ceilEvents}
                  rows={dates}
                  myEvents={myEvents}
                  eventDetails={this.props.eventDetails}
                  getEventDetail={this.props.getEventDetail}
                  removeEvent={this.props.removeEvent}
                  makeEventDetailsVisible={this.props.makeEventDetailsVisible}
                  flipControl={this.props.flipControl}
                  toggleModalWindow={this.props.toggleModalWindow}
                  deviceScreenWidth={this.props.deviceScreenWidth}
                  modalWindow={this.props.modalWindow}
                />
            </tbody>
        );
    }
}
