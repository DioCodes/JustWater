import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Animated from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';

export const Waves = () => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const A = 5;
  const H = 75;
  const T = 200;

  const fill = "#fff";

  const _animValues = [];

  _animValues.push(new Animated.Value(1));

  let translateX = _animValues[0].interpolate({
    inputRange: [0, 1],
    outputRange: [0, -2 * T],
  });

  return (
    <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={styles.circle} />
        }
      > 
        <AnimatedSvg
          style={{
            width: 3 * T,
            height: A + H,
            left: 0,
            bottom: 0,
            position: 'absolute',
            // transform: [{ translateX }],
            transform: [{ translateX: 0 }],
          }}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${3 * T} ${A + H}`}
        >
          <Path
            d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${3 * T / 2} 0 T ${2 * T} 0T ${5 * T / 2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </AnimatedSvg>
      </MaskedView>
  )
}

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    width: "100%",
    backgroundColor: 'red',
    borderRadius: 150,
  }
});