import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { useDispatch } from 'react-redux';
import { addCup, resetCups } from '../store/actions/cupsActions';

import { Waves } from './Waves';
import { Button } from './Button';
import theme from '../theme';

export const WaterCircle = () => {
  const dispatch = useDispatch()

  return (
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

      <Button
        // name="Drink water"
        iconName="ios-water-outline"
        center
        style={{
          ...styles.btn, 
          marginTop: 30
        }}
        onPress={() => {
          dispatch(addCup())
        }}
      />

      <Button
        // name="Reset"
        iconName="ios-refresh"
        center
        style={styles.btn}
        onPress={() => {
          dispatch(resetCups())
        }}
      />
    </View>
  )
}

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
    width: "50%",
  }
})