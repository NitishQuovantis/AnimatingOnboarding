import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default class OnboardingComponent extends Component {
  render() {
    const {title, desc, animation} = this.props.data;

    return (
      <View style={[style.containerStyle]}>
        <View style={[style.lottieStyle]}>
          <LottieView source={animation} autoPlay loop />
        </View>
        <Text style={style.walkThroughHeadingTextStyle}>{title}</Text>

        <Text style={[style.walkThroughSubTextStyle]}>
          {desc} {this.props.children}
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {},
  lottieStyle: {
    width: '100%',
    height: 400,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  walkThroughHeadingTextStyle: {
    color: '#024481',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    alignSelf: 'center',
  },

  walkThroughSubTextStyle: {
    color: '#282727',
    fontSize: 14,
    letterSpacing: 0.14,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 11,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 50,
  },
});
