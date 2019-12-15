import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Onboarding from './src/Onboarding';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={[style.containerStyle]}>
        <Onboarding style={[style.onboardingStyle]} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: 60,
  },
  onboardingStyle: {
    flex: 1,
    backgroundColor: 'red',
  },
});
