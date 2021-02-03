import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../components/Button'
import { WaterCircle } from '../components/WaterCircle'
import { resetCups } from '../store/actions/cupsActions'

import theme from '../theme'

export const MainScreen = () => {
  let drinkedMl = useSelector((state) => state.cups.drinkedMl);
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.main}>
      {/* //need component// */}
      <View style={styles.cupsContainer}>
        <Button
          // name="Reset"
          iconName="ios-refresh"
          center
          style={styles.btn}
          onPress={() => {
            dispatch(resetCups())
          }}
        />
        <Text style={styles.cupsText}>{`${drinkedMl}/2100 мл`}</Text>
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
    alignItems: 'center',
  },
  cupsContainer: {
    position: 'absolute',
    top: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cupsText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: 'norms-regular'
  },
  btn: {
    width: "50%",
    backgroundColor: 'transparent'
  }
})
