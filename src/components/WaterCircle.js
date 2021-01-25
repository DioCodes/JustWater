import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Wave from "react-native-waveview"

export const WaterCircle = () => {
  return (
    <View style={styles.circle}>
      <Text style={styles.waterPercentText}>
        16,7%
      </Text>
      <Wave
        // ref={ref=>this._waveRect = ref}
        style={styles.wave}
        H={150}
        speed={15 * 1000}
        waveParams={[
            {A: 25, T: 400, fill: 'rgba(255, 255, 255, .25)'},
            {A: 30, T: 440, fill: 'rgba(255, 255, 255, .5)'},
            {A: 35, T: 480, fill: 'rgba(255, 255, 255, 1)'},
        ]}
        animated={true}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  waterPercentText: {
    fontSize: 70,
    color: '#fff',
    fontFamily: 'norms-bold',
    position: 'absolute'
  },
  wave: {
    width: 300,
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 150,
},
})