import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import CalendarMonthAndYear from './CalendarMonthAndYear';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavMenuHandler = this.toggleNavMenuHandler.bind(this);
    }

    toggleNavMenuHandler() {
        this.props.changeHeaderNavVisibity();
    }

    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        const navIsVisible = this.props.headerNavIsVisible.get('visibility');
        const clickHandlerForMobile = isMobile ? { onClick: this.toggleNavMenuHandler } : {};
        return (
            <header>
                <div className="container">
                    <Link className="logo" to="/">
                        <img src={'public/images/logo.png'} alt="Schedule" />
                    </Link>
                    <a onClick={this.toggleNavMenuHandler} className="toggle-nav-menu">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </a>
                    {isMobile &&
                        (<CalendarMonthAndYear
                          myEvents={this.props.myEvents}
                        />)
                    }
                    <div className={`${navIsVisible ? '' : 'zero-height'} nav-wrapper`}>
                        <nav>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/">home</Link>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/workshop">workshop</Link>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/deadline">deadline</Link>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/lecture">lecture</Link>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/event">event</Link>
                            <Link {...clickHandlerForMobile} className="nav-btn" to="/webinar">webinar</Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
