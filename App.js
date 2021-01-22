import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./navigation/Navigation";
import {Button} from "react-native-web";
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <React.Fragment>
          <Navigation/>
      </React.Fragment>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
