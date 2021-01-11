import {StatusBar, Text} from 'react-native';
import React from 'react';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import Routes from './routes';
import {colors} from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <Text>Hello World</Text>
    </>
  );
}
