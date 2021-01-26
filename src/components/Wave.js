import React, { useEffect, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export const Wave = ({ H, waveParams, animated, style }) => {
  // const [waveParams, setWaveParams] = useState(waveParameters)
  // const [H, setH] = useState(H)
  
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  // const _animValues = [];
  // const _animations = [];
  // const _animated = animated || false;

  // useEffect(() => {
  //   for (let i = 0; i < waveParams.length; i++) {
  //     _animValues.push(new Animated.Value(0));
  //   };
  //   _animated && startAnim();

  //   return () => {
  //     stopAnim();
  //     _animValues = null;
  //     _animations = null;
  //   }
  // });

  let waves = [];
  console.log(waveParams.length)

  for (let i = 0; i < waveParams.length; i++) {
    let {A, T, fill} = waveParams[i];
    let translateX = _animValues[i].interpolate({
      inputRange: [0, 1],
      outputRange: [0, -2 * T],
    });

    let wave = (
      <AnimatedSvg
        key={i}
        style={{
          width: 3 * T,
          height: A + H,
          position: 'absolute',
          left: 0,
          bottom: 0,
          transform: [{ translateX }],
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
    );

    waves.push(wave);
  }

  // const setWaveParams = (waveParams) => {
  //   if (!waveParams) return;

  //   let animated = _animated;
  //   let newWaveCount = waveParams.length;
  //   let oldWaveCount = waveParams.length;
  //   if (animated) {
  //       stopAnim();
  //       for (let v of _animValues) {
  //         v.setValue(0);
  //       }
  //   }
  //   if (newWaveCount !== oldWaveCount) {
  //     _animValues = [];
  //     for (let i = 0; i < waveParams.length; i++) {
  //       _animValues.push(new Animated.Value(0));
  //     }
  //   }

    // setWaveParams(() => {
    //   if (animated) {
    //     startAnim();
    //   }
    // });
  // }

  // setWaterHeight(H) {
  //   setH(H);
  // }

  // startAnim() {
  //   stopAnim();

  //   const {
  //     speed = 5000,
  //     speedIncreasePerWave = 1000,
  //     easing = 'linear'
  //   } = this.props

  //   for (let i = 0; i < _animValues.length; i++) {
  //       let anim = Animated.loop(Animated.timing(_animValues[i], {
  //           toValue: 1,
  //           duration: speed + i * speedIncreasePerWave,
  //           easing: Easing[easing],
  //           useNativeDriver: true,
  //       }));
  //       _animations.push(anim);
  //       anim.start();
  //   }
  //   _animated = true;
  // }

//   stopAnim() {
//     for (let _anim of _animations) {
//         _anim.stop();
//         _anim = null;
//     }
//     _animations = [];
//     _animated = false;
// }

  return (
    <View style={style}>
      {waves}
    </View>
  );
};