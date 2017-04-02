/* https://github.com/istarkov/google-map-react */
/* https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ */

/* https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/ */
/* Rebuild https://tomchentw.github.io/react-google-maps/places/search-box - https://github.com/tomchentw/react-google-maps*/



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
    zoom: 12
  };

  render() {

    /* Make sure that props are formatted correctly https://people.cs.pitt.edu/~mehmud/cs134/javascript2.html*/

    /* Split and convert coordinate into an object containing floats to be send to Google map */

    const res = this.props.coordinates.split(',');
    const center = {
      lat: parseFloat(res[0]),
      lng: parseFloat(res[1])
    }

    /* console.log(center) */

    return (
      <div style={{width: '100%', height: '400px'}}>
       <GoogleMapReact
        center={center}
        zoom={this.props.zoom}

      >
        <Marker
          lat={parseFloat(res[0])}
          lng={parseFloat(res[1])}
          text={this.props.venue_name}
        />
      </GoogleMapReact>
    </div>
    );
  }
}
