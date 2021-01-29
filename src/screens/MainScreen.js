import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { Button } from '../components/Button'
import { WaterCircle } from '../components/WaterCircle'

import theme from '../theme'

export const MainScreen = () => {
  let drinkedCups = useSelector((state) => state.cups.drinkedCups);

  return (
    <SafeAreaView style={styles.main}>
      {/* //need component// */}
      <View style={styles.cupsContainer}>
        <Text style={styles.cupsText}>{`${drinkedCups}/6 cups`}</Text>
      </View>
      {/*  */}
      <WaterCircle />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cupsContainer: {
    position: 'absolute',
    top: 30
  },
  cupsText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'norms-regular'
  }
})
