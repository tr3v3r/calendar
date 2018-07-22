import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ModalW.css';

export default class ModalW extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModWindClickHandler = this.toggleModWindClickHandler.bind(this);
    }

    toggleModWindClickHandler() {
        this.props.toggleModalWindow('');
    }

    render() {
        const events = this.props.modalWindow.get('modalEvents');
        let template;
        let date;
        if (events) {
            template = events.map(item => (
                <div key={item.id} className="modal-window-event">
                    <div className="mod-win-event-time">
                        {new Date(item.start).toString().slice(16, 21)}
                    </div>
                    <div className="mod-win-event-type">
                        <Link className="capitalize" to={`${item.type}/${item.id}`} onClick={this.toggleModWindClickHandler}>{item.type}</Link>
                    </div>
                </div>
            ));
            date = new Date(events.get(0).start).toLocaleString('en-us', { year: 'numeric',
                month: 'numeric',
                day: 'numeric' });
        }
        return (
            <div className={`${events ? 'modal-window-wrapper' : 'hidden'}`}>
                <div className="modal-window">
                    <div className="modal-window-cross-wrapper">
                        <span onClick={this.toggleModWindClickHandler}>
                            <i className="fa fa-times" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="modal-window-date-wrapper">
                        Events for {date}
                    </div>
                    <div className="modal-window-events-wrapper">
                        {template}
                    </div>
                    <div className="modal-window-btn-wrapper">
                        <button className="modal-window-close-btn" onClick={this.toggleModWindClickHandler}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}
