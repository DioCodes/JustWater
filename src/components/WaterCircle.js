import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

import * as Haptics from "expo-haptics";
import { useDispatch } from 'react-redux';
import { addCup } from '../store/actions/cupsActions';

import { Waves } from './Waves';
import theme from '../theme';

export const WaterCircle = () => {
  const dispatch = useDispatch()

  return (
    <TouchableOpacity activeOpacity={theme.ACTIVE_OPACITY} onPress={() => {
      dispatch(addCup());
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }}>
      <View style={styles.main}>
        <View style={styles.circle}>
          <Waves
            wavesParams={[
              {A: 10, T: 280, fill: "rgba(255, 255, 255, .25)"},
              {A: 15, T: 240, fill: "rgba(255, 255, 255, .5)"},
              {A: 20, T: 200, fill: "#fff"},
            ]}
            animated
          />
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 300,
    height: 300,
    backgroundColor: theme.TERTIARY_COLOR,
    borderRadius: 150,
  },
  btn: {
    width: "50%"
  }, 
})