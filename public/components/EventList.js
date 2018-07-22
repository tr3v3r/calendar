import React from 'react';
import EventPane from './EventPane';

export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.togglePastEvents = this.togglePastEvents.bind(this);
    }

    componentWillUnmount() {
        const visibility = this.props.eventsVisibilty.get('visibility');
        if (!visibility) {
            this.props.changeVisibity();
        }
    }

    togglePastEvents() {
        this.props.changeVisibity();
    }

    render() {
        const visibility = this.props.eventsVisibilty.get('visibility');
        const events = this.props.myEvents.get('events');
        const exactTypeEvents = events.filter(item => (
            item.type === this.props.match.params.eventType
        ));

        exactTypeEvents.sort((a, b) => (
            +new Date(a.start) - +new Date(b.start)
        ));

        const template = exactTypeEvents.map(item => (
            <EventPane key={item.id} visibility={visibility} event={item} />
        ));
        return (
            <section className="container">
                <div className="event-list-headline clearfix">
                    <span className="capitalize event-type-headline">
                        {`${this.props.match.params.eventType}s:`}
                    </span>
                    <div className="event-list-switcher">
                        <span className="event-list-switcher-state">{`${visibility ? 'Hide' : 'Show'} past events:`}</span>
                        <input className="past-event-hide-checkbox" onChange={this.togglePastEvents} type="checkbox" id="switch" />
                        <label htmlFor="switch">Toggle</label>
                    </div>
                </div>
                {events.length ? template : <div className="loader" /> }
            </section>
        );
    }
}
