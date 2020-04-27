import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import {Button} from 'semantic-ui-react';
import redDotN from './red-dot-n.png'
import redDotNE from './red-dot-ne.png'
import redDotNW from './red-dot-nw.png'
import redDotS from './red-dot-s.png'
import redDotSE from './red-dot-se.png'
import redDotSW from './red-dot-sw.png'
import redDotE from './red-dot-e.png'
import redDotW from './red-dot-w.png'

class GMap extends Component {

  dirs = {
    'n': redDotN,
    'ne': redDotNE,
    'nw': redDotNW,
    's': redDotS,
    'se': redDotSE,
    'sw': redDotSW,
    'e': redDotE,
    'w': redDotW
  }

  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {},         // Shows the active marker upon click
    selectedPlace: {},        // Shows the infoWindow to the selected place upon a marker
    selectedPed: {}
  };

  //componentDidMount = () => {
  //  let { polling } = this.props;
  //  if (!polling) {
  //    this.props.pollPositions();
  //  }
  //}

  onMarkerClick = (props, marker, e, ped) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      selectedPed: ped
  });

  onClose = props => {
    //console.log(this.state.activeMarker);
    //console.log(this.state.selectedPlace);
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  createMarker = (lname, llat, llng, dir, position) => {
    return (
      <Marker
        onClick={(props, marker, e) => this.onMarkerClick(props, marker, e, position)}
        icon={{
          url: this.dirs[dir],
          scaledSize: {width: 80, height: 80},
          anchor: {x: 40, y: 40}
        }}
        name={lname}
        key={lname}
        position={{
          lat: llat,
          lng: llng
        }}
      />
    );
  }

  createMarkers = (positions) => {
    let markers = [];
    //let positions = [{name: "Sim's Marker", lat: 32.717572, lng: -117.16662},
    //                 {name: "Jim's Marker", lat: 32.713574, lng: -117.16564}];
    for (const position of positions) {
      markers.push(this.createMarker(position.name, position.lat, position.lng, position.dir, position));
    }

    return markers;
  }

/*
defaultOptions={{
  disableDefaultUI: true, // disable default map UI
  draggable: true, // make map draggable
  keyboardShortcuts: false, // disable keyboard shortcuts
  scaleControl: true, // allow scale controle
  scrollwheel: true, // allow scroll wheel
  styles: this.styles // change default map styles
}}
*/
  render() {
    return (
      <div className="mapContainer" style={{height: '90vh', width: '100%'}}>
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 32.717572,
          lng: -117.16662
        }}
        style={{height: '90vh', width: '100%'}}
      >
        {this.createMarkers(this.props.positions)}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          className={'infoWindow'}
        >
          <h4>ID: {this.state.selectedPlace.name}</h4>
          <p>
            A person was recently spotted here
            {this.state.selectedPed.time ? ' at '+this.state.selectedPed.time[3] : ''}
          </p>
          <Button color='red'>Get Directions</Button>
          <Button color='blue'>Call Dibs (PRO)</Button>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSbG1MQEsStL9XflSr-NVuhwzE3ibsDyI'
})(GMap);
