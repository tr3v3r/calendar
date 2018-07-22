import React from 'react';
import dateParseToHumanTime from '../parseFunctions/dateParseToHumanTime';
import dateToTimeGapFunction from '../parseFunctions/dateToTimeGapFunction';
import Comment from './Comment';

export default class DeadlineDetails extends React.Component {
    constructor(props) {
        super(props);
        this.postMessageHandler = this.postMessageHandler.bind(this);
    }

    postMessageHandler(e) {
        e.preventDefault();
        const author = this.textInput.value;
        const message = this.textArea.value;
        this.props.postMessage(author, message, this.props.eventInfo.id, new Date());
        this.textInput.value = '';
        this.textArea.value = '';
    }

    render() {
        const eventInfo = this.props.eventInfo;
        const comments = this.props.comments.get(this.props.eventInfo.id);
        return (
            <div className="event-details">
                <section>
                    <h1 className="event-title">{eventInfo.title}</h1>
                    <h2 className="event-type">Task</h2>
                </section>

                <section>
                    <h3 className="headline-background"><span>Deadline</span></h3>
                    <p className="event-deadline">{dateParseToHumanTime(eventInfo.start)}<br />{dateToTimeGapFunction(eventInfo.start, '', eventInfo.type)}</p>

                </section>

                <section>
                    <h3 className="headline-background"><span>Description</span></h3>
                    <p className="event-description">{eventInfo.description}</p>
                </section>

                <section>
                    <h3 className="headline-background"><span>Requirements</span></h3>
                    <ul className="event-requirements">
                        {eventInfo.requirements.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3 className="headline-background"><span>Submit your task</span></h3>
                    <a href={eventInfo.passTo}>here</a>
                </section>

                <section>
                    <h3 className="headline-background"><span>Supervisor</span></h3>
                    {eventInfo.speakers.map(item => (
                        <div key={item.id} className="event-speaker">
                            <h4>{item.name}</h4>
                            <img src={item.avatar} alt="avatar" />
                        </div>
                    ))}
                </section>

                <section>
                    <h3 className="headline-background"><span>Useful links</span></h3>
                    {eventInfo.resources.map(item => (
                        <a key={item.description} className="event-resources" href={item.resource}>{item.description}</a>
                    ))}
                </section>

                <section className="comment-wrapper clearfix">
                    <h3 className="headline-background"><span>Comments</span></h3>
                    <form onSubmit={this.postMessageHandler} className="feedback-form">
                        <label htmlFor="author">Your name:*</label>
                        <input ref={(input) => { this.textInput = input; }} id="author" type="text" placeholder="Your name..." required />
                        <label htmlFor="message">Message:*</label>
                        <textarea ref={(textarea) => { this.textArea = textarea; }} id="message" type="text" placeholder="Add comment..." required />
                        <button type="submit">POST</button>
                    </form>
                </section>

                {comments &&
                    <section className="event-comments">
                        <div className="comments-counter">{`${comments.size} Comments`}</div>
                        {comments.map((item, index) => (
                            <Comment key={item} comment={item} number={index + 1} />
                        ))}
                    </section>
                }

            </div>
        );
    }
}
