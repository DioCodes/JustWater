import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { WaterCircle } from '../components/WaterCircle'

import theme from '../theme'

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
    {/* //need component// */}
      <View style={styles.cupsContainer}> 
        <Text style={styles.cupsText}>1/6</Text>
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
