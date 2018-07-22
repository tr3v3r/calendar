import React from 'react';
import Ceil from './Ceil';

export default class Row extends React.Component {
    render() {
        const result = this.props.rows.map(item => (
            <Ceil
              ceilEvents={this.props.ceilEvents}
              myEvents={this.props.myEvents}
              eventDetails={this.props.eventDetails}
              key={item.date}
              ceil={item}
              getEventDetail={this.props.getEventDetail}
              removeEvent={this.props.removeEvent}
              makeEventDetailsVisible={this.props.makeEventDetailsVisible}
              flipControl={this.props.flipControl}
              toggleModalWindow={this.props.toggleModalWindow}
              deviceScreenWidth={this.props.deviceScreenWidth}
              modalWindow={this.props.modalWindow}
            />
            ));
        return (
            <tr>
                {result}
            </tr>
        );
    }
}
