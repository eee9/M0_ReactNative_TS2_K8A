/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'blue', fontSize: 18}}>
        r01, K8A. Hi, React Native (TypeScript)
      </Text>
    </View>
  );
};
export default App;
