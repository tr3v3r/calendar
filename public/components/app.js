import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import '../styles/loading.css';

import Calendar from './Calendar';
import Header from './Header';
import EventDetails from './EventDetails';
import EventList from './EventList';
import ModalW from './ModalW';
import * as calendarActions from '../actions/calendarActions';


class App extends React.Component {
    componentDidMount() {
        this.props.renderEvents();
        this.props.updateCurScreenWidth();
        window.addEventListener('resize', this.props.updateCurScreenWidth);
    }
    render() {
        return (
            <div className="wrapper">
                <ModalW
                  modalWindow={this.props.modalWindow}
                  toggleModalWindow={this.props.toggleModalWindow}
                />
                <Header
                  myEvents={this.props.myEvents}
                  headerNavIsVisible={this.props.headerNavIsVisible}
                  changeHeaderNavVisibity={this.props.changeHeaderNavVisibity}
                  deviceScreenWidth={this.props.deviceScreenWidth}
                />
                <main>
                    <Switch>
                        <Route
                          exact
                          path="/"
                          render={() => (<Calendar
                            ceilEvents={this.props.ceilEvents}
                            myEvents={this.props.myEvents}
                            changeMonth={this.props.changeMonth}
                            changeWeek={this.props.changeWeek}
                            toggleMonthWeek={this.props.toggleMonthWeek}
                            makeEventDetailsVisible={this.props.makeEventDetailsVisible}
                            makeEventDetailsInvisible={this.props.makeEventDetailsInvisible}
                            flipControl={this.props.flipControl}
                            flipEvent={this.props.flipEvent}
                            flipLegend={this.props.flipLegend}
                            toggleModalWindow={this.props.toggleModalWindow}
                            deviceScreenWidth={this.props.deviceScreenWidth}
                            modalWindow={this.props.modalWindow}

                            eventDetails={this.props.eventDetails}
                            comments={this.props.comments}
                            getEventDetail={this.props.getEventDetail}
                            removeEvent={this.props.removeEvent}
                            getLocation={this.props.getLocation}
                            postMessage={this.props.postMessage}
                          />)}
                        />

                        <Route
                          path="/:eventType/:id" render={({ match }) => (<EventDetails
                            event={this.props.eventDetails}
                            comments={this.props.comments}
                            match={match}
                            getEventDetail={this.props.getEventDetail}
                            removeEvent={this.props.removeEvent}
                            getLocation={this.props.getLocation}
                            postMessage={this.props.postMessage}
                          />)}
                        />

                        <Route
                          exact
                          path="/:eventType"
                          render={({ match }) => (<EventList
                            myEvents={this.props.myEvents}
                            match={match}
                            changeVisibity={this.props.changeVisibity}
                            eventsVisibilty={this.props.eventsVisibilty}
                          />)}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myEvents: state.calendar,
        eventDetails: state.eventDetails,
        comments: state.comments,
        eventsVisibilty: state.eventListVisibilty,
        headerNavIsVisible: state.headerNavIsVisible,
        flipControl: state.flipControl,
        ceilEvents: state.ceilEvents,
        modalWindow: state.modalWindow,
        deviceScreenWidth: state.deviceScreenWidth,
    };
}

function mapActionsToProps(dispatch) {
    return bindActionCreators(calendarActions, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(App);
