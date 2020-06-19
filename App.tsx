import React from 'react';
import {StatusBar} from 'react-native';
import {AppLoading} from 'expo';
import Routes from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Routes />
    </>
  );
}

