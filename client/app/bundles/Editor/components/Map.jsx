/* https://github.com/istarkov/google-map-react */
/* https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ */


import React, { PropTypes } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    position: 'relative', color: '#FFF', background: '#000', padding: 10, width: 100, top: -50, left: -50, textAlign: "center",
  }}>
    {text}
  </div>
);

export default class Map extends React.Component {

  static defaultProps = {
    center: {lat: -26.1554138, lng: 27.9659036},
    zoom: 11
  };

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        map
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={-26.1554138}
          lng={27.9659036}
          text={this.props.venue_name}
        />
      </GoogleMapReact>
    </div>
    );
  }
}
