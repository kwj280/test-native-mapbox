import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


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

const HOST_SERVER ='https://brave-swan-12.loca.lt'

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
        </View>
      </View>
    );
  }
}