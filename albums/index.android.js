//Index.android.js - Place code in here for android

//Step1: Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Step2: Create a Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//Step3: Render it to the device
AppRegistry.registerComponent('albums', () => App);
