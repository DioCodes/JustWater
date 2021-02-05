import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Path } from 'react-native-svg';
import { useSelector } from 'react-redux';

export const Waves = ({ wavesParams }) => {
  const [waves, setWaves] = useState([])
  const [waterG, setWaterG] = useState(waterGoal);
  let waterGoal = useSelector((state) => state.waterGoal.waterGoal);

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const AnimatedPath = Animated.createAnimatedComponent(Path);
  
  let dMl = useSelector((state) => state.cups.drinkedMl);
  const maxH = 290;
  const speed = 2000;
  const speedIncreasePerWave = 1000;
  const easing = 'linear';
  let h = new Animated.Value(100);
  let animHeight = useRef(new Animated.Value(dMl/waterGoal)).current; // 0.16 -> 1/6
  
  const _animValues = [];

  // ANIMATIONS //
  const startAnim = () => {
    for (let i = 0; i < _animValues.length; i++) {
      let anim = Animated.loop(Animated.timing(_animValues[i], {
        toValue: 1,
        duration: speed + i * speedIncreasePerWave,
        easing: Easing[easing],
        useNativeDriver: true,
      }));

      anim.start();
    }
  }

  const animateToTop = () => {
    Animated.timing(animHeight, {
      toValue: dMl >= waterGoal ? 1 : dMl/waterGoal,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }

  const animateToBottom = () => {
    Animated.timing(animHeight, {
      toValue: 0,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }

  const getWaves = () => {
    const wavesContainer = [];
    
    for (let i = 0; i < wavesParams.length; i ++) {    
      _animValues.push(new Animated.Value(0));

      let {A, T, fill} = wavesParams[i];
      let translateX = _animValues[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1 * T],
      });

      let animatedHeight = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [
          `M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${3 * T / 2} 0 T ${2 * T} 0T ${5 * T / 2} 0 T ${3 * T} 0 V ${0} H 0 Z`, 

          `M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${3 * T / 2} 0 T ${2 * T} 0T ${5 * T / 2} 0 T ${3 * T} 0 V ${maxH} H 0 Z`],
      });

      let animatedViewBox = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [`0 0 ${3 * T} ${A + 0}`, `0 0 ${3 * T} ${A + maxH}`]
      })

      let animatedSVGHeight = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [maxH, 0]
      })

      let wave = (
        <AnimatedSvg
          key={i}
          style={{
            left: 0,
            bottom: 0,
            position: 'absolute',
            width: 3 * T,
            height: A + maxH,
            transform: [
              { translateX },
              { translateY: animatedSVGHeight },
            ],
          }}
          preserveAspectRatio="xMinYMin meet"
          viewBox={animatedViewBox}
        >
          <AnimatedPath
            d={animatedHeight}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </AnimatedSvg>
      )
    
      wavesContainer.push(wave)
    }

    return setWaves(wavesContainer);
  }

  useLayoutEffect(() => {
    getWaves();
    startAnim();
    if (waterGoal !== waterG) {
      animateToTop();
      setWaterG(waterGoal);
    }
  }, [waterGoal]);
  
  useEffect(() => {
    if (dMl >= 350) {
      animateToTop();
    } else {
      animateToBottom();
    }
  }, [dMl])
  
  return (
    <MaskedView
      style={styles.mask}
      maskElement={
        <View style={styles.circle} />
      }
    > 
      {waves}
    </MaskedView>
  )
};

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'red',
    borderRadius: 150
  },
});