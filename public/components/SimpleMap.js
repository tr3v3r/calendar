import React from 'react';
import GoogleMapReact from 'google-map-react';


export default class SimpleMap extends React.Component {
    render() {
        return (
            <GoogleMapReact
              defaultCenter={this.props.location}
              defaultZoom={17}
            >
                <AnyReactComponent
                  lat={this.props.location.lat}
                  lng={this.props.location.lng}
                />
            </GoogleMapReact>
        );
    }
}

const AnyReactComponent = () => <div style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '-50px', left: '-25px' }} src={'/public/images/pin.png'} width="50" alt="Pointer" /></div>;
