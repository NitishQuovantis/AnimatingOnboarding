import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import * as Animation from '../resource';
import OnboardingComponent from './OnboardingComponent';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);

    const loadingText =
      'In this phase, you will have high-calorie food in order to accelerate your metabolism';
    const losingText =
      'This is a very low calorie phase lasting 6-8 weeks. You will experience rapid, healthy weight loss without hunger or cravings.';
    const resetText =
      'In this phase you will increase your calorie intake keeping the food composition similar as of the last phase. The purpose of this is to restore your metabolism to its normal level and';

    this.OBData = [
      {
        title: 'Loading Phase',
        desc: loadingText,
        animation: Animation.OB1,
      },
      {
        title: 'Losing Phase',
        desc: losingText,
        animation: Animation.OB2,
      },
      {
        title: 'Reset Phase',
        desc: resetText,
        animation: Animation.OB3,
      },
    ];
  }

  state = {
    offset: 0,
    selectedPage: 0,
    isScrollEnabled: true,
  };

  render() {
    return (
      <ViewPager
        style={[style.pagerStyle]}
        onPageScroll={event => {
          const {offset} = event.nativeEvent;

          if (offset < 0) {
            return;
          }

          this.setState({offset: offset});
        }}
        onPageSelected={event => {
          const page = event.nativeEvent.position;
          this.setState({selectedPage: page});
        }}
        showPageIndicator>
        <OnboardingComponent
          data={this.OBData[0]}
          play={this.state.selectedPage === 0}
          offset={this.state.selectedPage === 0 ? this.state.offset : 0}
          finalOffset={0.75}
        />
        <OnboardingComponent
          data={this.OBData[1]}
          play={this.state.selectedPage === 1}
          offset={this.state.selectedPage === 1 ? this.state.offset : 0}
          finalOffset={0.75}
        />
        <OnboardingComponent
          data={this.OBData[2]}
          play={this.state.selectedPage === 2}
          offset={this.state.selectedPage === 2 ? this.state.offset : 0}
          finalOffset={1}
        />
      </ViewPager>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {},

  pagerStyle: {
    width: '100%',
    height: 550,
  },
  pageStyle: {},
});
