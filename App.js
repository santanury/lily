import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNav from './src/navigations/StackNav';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>
        <StackNav />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
