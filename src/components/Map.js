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
      {props.markers.map(marker => {
        return (
          <Marker
            position={{
              lat: marker.address.latitude,
              lng: marker.address.longitude,
            }}
            onClick={() => props.onMarkerClick(marker)}
          />
        );
      })}
    </GoogleMap>
  );
});

class Map extends React.PureComponent {
  render() {
    const {markers, onMarkerClick} = this.props;

    return <BaseMap markers={markers} onMarkerClick={onMarkerClick} />;
  }
}

export default Map;
