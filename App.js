import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoid29vamFlIiwiYSI6ImNreWR5b3UxNTBjMGoyb3NoMjk4eXUxbHcifQ.n4z9_obSqP5bOL6Sq-T5tA');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text>Mapbox</Text>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}