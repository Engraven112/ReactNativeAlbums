//Index.android.js - Place code in here for android

//Step1: Import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Step2: Create a Component
const App = () => {
  return (
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

//Step3: Render it to the device
AppRegistry.registerComponent('albums', () => App);
