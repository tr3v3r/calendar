import React from 'react';
import '../styles/EventDetails.css';
import LectureDetails from './LectureDetails';
import DeadlineDetails from './DeadlineDetails';

export default class EventDetails extends React.Component {
    componentDidMount() {
        if (this.props.getEventDetail) {
            this.props.getEventDetail(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.removeEvent();
    }

    render() {
        const event = this.props.event.get('currEvent');
        let eventDetails;
        if (event) {
            if (event.type === 'deadline') {
                eventDetails = (<DeadlineDetails
                  eventInfo={event}
                  comments={this.props.comments}
                  postMessage={this.props.postMessage}
                />);
            } else {
                eventDetails = (<LectureDetails
                  location={this.props.event.get('location')}
                  eventInfo={event}
                  getLocation={this.props.getLocation}
                />);
            }
        } else eventDetails = <div className={'loader'} />;
        return (
            <section className="container">
                {eventDetails}
            </section>
        );
    }
}
