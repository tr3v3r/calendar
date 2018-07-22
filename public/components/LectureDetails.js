import React from 'react';
import dateToTimeGapFunction from '../parseFunctions/dateToTimeGapFunction';
import dateParseToHumanTime from '../parseFunctions/dateParseToHumanTime';
import SimpleMap from './SimpleMap';

export default class LectureDetails extends React.Component {
    componentDidMount() {
        this.props.getLocation(this.props.eventInfo.location);
    }

    render() {
        const eventInfo = this.props.eventInfo;
        let locationMap;
        if (this.props.location) {
            locationMap = (<div className="event-details-map">
                <SimpleMap location={this.props.location} />
            </div>);
        } else {
            locationMap = '';
        }
        return (
            <div className="event-details">
                <section>
                    <h1 className="event-title">{eventInfo.title}</h1>
                    <h2 className="event-type">{`< ${eventInfo.type} >`}</h2>
                    <h2 className="event-date">{dateParseToHumanTime(eventInfo.start)}</h2>
                </section>

                <section>
                    <h3 className="headline-background"><span>Time</span></h3>
                    <p className="event-time-gap">{dateToTimeGapFunction(eventInfo.start, eventInfo.duration)}</p>
                </section>

                <section>
                    <h3 className="headline-background"><span>Description</span></h3>
                    <p className="event-description">{eventInfo.description}</p>
                </section>

                <section>
                    <h3 className="headline-background"><span>Speakers</span></h3>
                    {eventInfo.speakers.map(item => (
                        <div key={item.id} className="event-speaker">
                            <h4>{item.name}</h4>
                            <img src={item.avatar} alt="avatar" />
                        </div>
                    ))}
                </section>

                <section>
                    <h3 className="headline-background"><span>Presentation & Video</span></h3>
                    <div className="presentation-and-video">
                        <a href={eventInfo.presentation} className="presentation-and-video-item">
                            <i className="fa fa-scribd" aria-hidden="true" />
                            Presentation
                        </a>
                        <a href={`https://www.youtube.com/watch?v=${eventInfo.podcastId}`} className="presentation-and-video-item">
                            <i className="fa fa-play" aria-hidden="true" />
                            Video
                        </a>
                    </div>
                </section>

                <section>
                    <h3 className="headline-background"><span>Resources</span></h3>
                    {eventInfo.resources.map(item => (
                        <a key={item.description} className="event-resources" href={item.resource}>{item.description}</a>
                    ))}
                </section>

                {eventInfo.type !== 'webinar' &&
                    <section>
                        <h3 className="headline-background"><span>Location</span></h3>
                        <p>{eventInfo.location}</p>
                        {locationMap}
                    </section>
                }

                <section className="feedback-wrapper">
                    <h3 className="headline-background"><span>Feedback</span></h3>
                    <form className="feedback-form">
                        <label htmlFor="feedback">Message:*</label>
                        <textarea id="feedback" type="text" placeholder="Your feedback..." required />
                        <button type="submit">SEND</button>
                    </form>
                </section>

            </div>
        );
    }
}
