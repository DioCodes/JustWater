import React, { useRef, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { Waves } from './Waves';

export const WaterCircle = ({cups}) => {
  let anim = useRef(new Animated.Value(cups)).current;

  return (
    <View style={styles.circle}>
      <Waves />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    borderRadius: 150,
    marginBottom: 30
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
})