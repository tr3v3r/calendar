import React from 'react';

export default class Thead extends React.Component {
    render() {
        const isMobile = this.props.deviceScreenWidth.get('isMobileDevice');
        return (
            <thead>
                <tr>
                    <th>{`${!isMobile ? 'Monday' : 'Mon'}`}</th>
                    <th>{`${!isMobile ? 'Tuesday' : 'Tue'}`}</th>
                    <th>{`${!isMobile ? 'Wendesday' : 'Wen'}`}</th>
                    <th>{`${!isMobile ? 'Thursday' : 'Thu'}`}</th>
                    <th>{`${!isMobile ? 'Friday' : 'Fri'}`}</th>
                    <th>{`${!isMobile ? 'Saturday' : 'Sat'}`}</th>
                    <th>{`${!isMobile ? 'Sunday' : 'Sun'}`}</th>
                </tr>
            </thead>
        );
    }
}
