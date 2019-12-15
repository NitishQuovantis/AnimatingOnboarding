import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import LottieView from 'lottie-react-native';

export default class OnboardingComponent extends Component {
  static getDerivedStateFromProps(props, state) {
    if (state.play === props.play && state.offset === props.offset) {
      return state;
    }

    if (state.play === props.play && state.offset !== props.offset) {
      return {...state, offset: props.offset};
    }

    return {
      ...props,
      isAnimating: true,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      ...props,
      isAnimating: props.play,
    };

    this.progress = new Animated.Value(0);
    this.startAnimation();
  }

  componentDidUpdate(newProps) {
    if (this.props.play === newProps.play) {
      return;
    }

    this.startAnimation();
  }

  startAnimation = () => {
    Animated.timing(this.progress, {
      toValue: this.props.finalOffset,
      duration: 3000,
    }).start(() => {
      this.setState({isAnimating: false});
    });
  };

  render() {
    const {animation, title, desc} = this.state.data;
    const {isAnimating, play} = this.state;

    let offSet = 0;

    if (!play) {
      offSet = 0;
      this.progress.setValue(0);
    } else {
      offSet = 0.75 + this.state.offset / 4;
    }

    console.log(title, isAnimating, offSet);

    return (
      <View style={[style.containerStyle]}>
        <View style={[style.lottieStyle]}>
          <LottieView
            source={animation}
            progress={isAnimating ? this.progress : offSet}
          />
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
