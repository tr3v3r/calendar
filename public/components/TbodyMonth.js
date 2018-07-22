import React from 'react';
import Row from './Row';

export default class TbodyMonth extends React.Component {
    render() {
        const myEvents = this.props.myEvents;
        const dates = myEvents.getDates();
        const tableRows = dates.map((item, index) => (
            <Row
              ceilEvents={this.props.ceilEvents}
              myEvents={myEvents}
              key={index}
              rows={item}
              flipControl={this.props.flipControl}
              toggleModalWindow={this.props.toggleModalWindow}
              deviceScreenWidth={this.props.deviceScreenWidth}
              modalWindow={this.props.modalWindow}
            />
            ));
        return (
            <tbody>
                {tableRows}
            </tbody>
        );
    }
}
