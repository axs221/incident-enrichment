import React from "react";
import {compose, withProps} from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Tooltip from "./Tooltip";

const centerOfUsa = {
  lat: 39.8283,
  long: -98.5795,
};

const BaseMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: "100%"}} />,
    containerElement: <div style={{height: "400px"}} />,
    mapElement: <div style={{height: "100%"}} />,
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
    <GoogleMap defaultZoom={10} defaultCenter={defaultCenter}>
      {props.markers.map(marker => {
        return (
          <Marker
            position={{
              lat: marker.address.latitude,
              lng: marker.address.longitude,
            }}
            opacity={marker === props.activeMarker ? 1.0 : 0.6}
            onClick={() => props.onMarkerClick(marker)}
          >
            {props.isTooltipOpen && marker === props.activeMarker ? (
              <InfoWindow onCloseClick={props.onToggleTooltip}>
                <Tooltip data={marker} />
              </InfoWindow>
            ) : null}
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isTooltipOpen: false};
  }

  render() {
    const {activeMarker, markers, onMarkerClick} = this.props;
    const {isTooltipOpen} = this.state;

    return (
      <BaseMap
        markers={markers}
        activeMarker={activeMarker}
        isTooltipOpen={isTooltipOpen}
        onMarkerClick={(marker) => {
          if (marker === activeMarker) {
            this.setState({isTooltipOpen: !isTooltipOpen});
          } else {
            this.setState({isTooltipOpen: true});
          }

          onMarkerClick(marker);
        }}
        onToggleTooltip={() =>
          this.setState({isTooltipOpen: !isTooltipOpen})
        }
      />
    );
  }
}

export default Map;
