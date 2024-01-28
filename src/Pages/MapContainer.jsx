import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '600px',
      height: '370px'
    };
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: 40.409264,
          lng: 49.867092
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyABx1WD6P-yRuJOlAZjRH4_XEHUMQsVMo4',
})(MapContainer);
