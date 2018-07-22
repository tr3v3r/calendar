import React from 'react';
import Thead from './Thead';
import TbodyMonth from './TbodyMonth';
import TbodyWeek from './TbodyWeek';
import '../styles/Table.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.changeMonthClick = this.changeMonthClick.bind(this);
        this.changeMonthKeydown = this.changeMonthKeydown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.changeMonthKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.changeMonthKeydown);
    }

    changeMonthKeydown(e) {
        const controlKeys = {
            39: 'right',
            37: 'left ',
        };
        if (this.props.myEvents.get('currentView') === 'Month') {
            this.props.changeMonth(controlKeys[e.keyCode]);
        } else if (this.props.myEvents.get('currentView') === 'Week') {
            this.props.changeWeek(controlKeys[e.keyCode]);
        }
    }

    changeMonthClick(e) {
        const target = e.nativeEvent.target.closest('a');
        if (this.props.myEvents.get('currentView') === 'Month') {
            this.props.changeMonth(target.dataset.control);
        } else if (this.props.myEvents.get('currentView') === 'Week') {
            this.props.changeWeek(target.dataset.control);
        }
    }
    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        const currentView = this.props.myEvents.get('currentView');
        let tBody;
        if (currentView === 'Month') {
            tBody = (<TbodyMonth
              ceilEvents={this.props.ceilEvents}
              myEvents={this.props.myEvents}
              flipControl={this.props.flipControl}
              toggleModalWindow={this.props.toggleModalWindow}
              deviceScreenWidth={this.props.deviceScreenWidth}
              modalWindow={this.props.modalWindow}
            />);
        } else if (currentView === 'Week') {
            tBody = (<TbodyWeek
              ceilEvents={this.props.ceilEvents}
              myEvents={this.props.myEvents}
              eventDetails={this.props.eventDetails}
              getEventDetail={this.props.getEventDetail}
              removeEvent={this.props.removeEvent}
              makeEventDetailsVisible={this.props.makeEventDetailsVisible}
              makeEventDetailsInvisible={this.props.makeEventDetailsInvisible}
              flipControl={this.props.flipControl}
              toggleModalWindow={this.props.toggleModalWindow}
              deviceScreenWidth={this.props.deviceScreenWidth}
              modalWindow={this.props.modalWindow}
            />);
        }
        return (
            <div className="table-wrapper">
                <a onClick={this.changeMonthClick} data-control="left " className={`${isMobile ? 'hidden' : 'table-btn table-left-btn'}`}>
                    <i className="fa fa-angle-left" aria-hidden="true" />
                </a>
                <table>
                    <Thead deviceScreenWidth={this.props.deviceScreenWidth} />
                    {tBody}
                </table>
                <a onClick={this.changeMonthClick} data-control="right" className={`${isMobile ? 'hidden' : 'table-btn table-right-btn'}`}>
                    <i className="fa fa-angle-right" aria-hidden="true" />
                </a>
            </div>
        );
    }
}
