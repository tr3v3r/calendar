import React from 'react';
import '../styles/Legend.css';

const Legend = props => (
    <aside className={`${props.flipControl.get('legendIsFlipped') ? '' : 'legend-invisible'} legend-sidebar`}>
        <div className="legend-element">
            <span className="legend-short">D</span>
            <span className="legend-icon"><i className="fa fa-hand-o-right" aria-hidden="true" /></span>
            <span className="legend-long">Deadline</span>
        </div>
        <div className="legend-element">
            <span className="legend-short">Wp</span>
            <span className="legend-icon"><i className="fa fa-hand-o-right" aria-hidden="true" /></span>
            <span className="legend-long">Workshop</span>
        </div>
        <div className="legend-element">
            <span className="legend-short">Wr</span>
            <span className="legend-icon"><i className="fa fa-hand-o-right" aria-hidden="true" /></span>
            <span className="legend-long">Webinar</span>
        </div>
        <div className="legend-element">
            <span className="legend-short">L</span>
            <span className="legend-icon"><i className="fa fa-hand-o-right" aria-hidden="true" /></span>
            <span className="legend-long">Lecture</span>
        </div>
        <div className="legend-element">
            <span className="legend-short">E</span>
            <span className="legend-icon"><i className="fa fa-hand-o-right" aria-hidden="true" /></span>
            <span className="legend-long">Event</span>
        </div>
    </aside>
);

export default Legend;
