import React from "react";
import {compose, withProps} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const centerOfUsa = {
  lat: 39.8283,
  long: -98.5795,
};

const BaseMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `400px`}} />,
    mapElement: <div style={{height: `100%`}} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => {
  const defaultCenter =
    props.markers && props.markers.length > 0
      ? {
          lat: props.markers[0].address.latitude,
          lng: props.markers[0].address.longitude,
        }
      : centerOfUsa;

  return (
    <GoogleMap defaultZoom={8} defaultCenter={defaultCenter}>
      {props.markers.map(incident => {
        return (
          <Marker
            position={{
              lat: incident.address.latitude,
              lng: incident.address.longitude,
            }}
            onClick={props.onMarkerClick}
          />
        );
      })}
    </GoogleMap>
  );
});

class Map extends React.PureComponent {
  state = {
    isMarkerShown: false, // ZZZZ - Remove?
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true});
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({isMarkerShown: false});
    this.delayedShowMarker();
  };

  render() {
    // TODO - should we do anything on click?
    return (
      <BaseMap
        markers={this.props.markers}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default Map;
