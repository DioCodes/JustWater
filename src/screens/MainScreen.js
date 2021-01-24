import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import theme from '../theme'

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.MAIN_COLOR,
  }
})
