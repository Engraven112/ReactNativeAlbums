//Index.android.js - Place code in here for android

//Step1: Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Step2: Create a Component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

//Step3: Render it to the device
AppRegistry.registerComponent('albums', () => App);
