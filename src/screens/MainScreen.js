import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Button } from '../components/Button'
import { WaterCircle } from '../components/WaterCircle'

import theme from '../theme'

export const MainScreen = () => {
  const [drinkedCups, addDrinkedCups] = useState(2)
  
  return (
    <SafeAreaView style={styles.main}>
    {/* //need component// */}
      <View style={styles.cupsContainer}> 
        <Text style={styles.cupsText}>2/6 cups</Text>
      </View>
    {/*  */}
      <WaterCircle cups={drinkedCups} />

      <Button 
        name="Animate" 
        iconName="water" 
        onPress={() => {
          ////
        }}
        style={{ width: "75%" }}
      />
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
