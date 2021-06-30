import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from "./components/Auth";

export default class App extends Component {

  render(){

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your own app!</Text>
        <Auth/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
