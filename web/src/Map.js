import * as React from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import markerIcon from './marker.png'

const TOKEN = 'pk.eyJ1Ijoid29vamFlIiwiYSI6ImNreWR5b3UxNTBjMGoyb3NoMjk4eXUxbHcifQ.n4z9_obSqP5bOL6Sq-T5tA'

const geolocateControlStyle = {
  right: 10,
  top: 10
};

export default function Map() {
  const [viewport, setViewport] = React.useState({
    latitude: 0,
    longitude: 0,
    zoom: 8
  });
  const [events, logEvents] = React.useState({});
  const [marker, setMarker] = React.useState({
    latitude: 51.11,
    longitude: -114.212
  });
  const onMarkerDragStart = React.useCallback(event => {
    logEvents(_events => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = React.useCallback(event => {
    logEvents(_events => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = React.useCallback(event => {
    logEvents(_events => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
    console.log('Marker Position: ', marker)
  }, []);


  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        onGeolocate={(GeolocationPosition) => {
          console.log('Current Location: ', GeolocationPosition.coords)
        }}
        auto
      />
      <Marker
        latitude={marker.latitude}
        longitude={marker.longitude}
        draggable
        offsetTop={-20}
        offsetLeft={-10}
        onDragStart={onMarkerDragStart}
        onDrag={onMarkerDrag}
        onDragEnd={onMarkerDragEnd}
        captureScroll={true}
      >
        <img src={markerIcon} style={{ width: '25px', height: '25px', pointerEvents: 'none' }} />
        <span>Marker</span>
      </Marker>
    </MapGL>
  );
}