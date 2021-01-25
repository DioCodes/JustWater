import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { Leaves } from '../../assets/images/Leaves'
import { UserIcon } from '../../assets/images/UserIcon'

export const UserThanks = () => {
  return (
    <View style={styles.top}>
        <Leaves height={175} width={175}/>
        <View style={styles.userPos}>
          <UserIcon/>
        </View>
        <Text style={styles.thanks}>
          {"Спасибо за поддержку"} <Ionicons name="ios-heart" size={18} color="white" />
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  top: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  userPos: {
    position: 'absolute',
    top: 25
  },
  thanks: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'norms-medium',
    position: 'absolute',
    bottom: 0
  },
})
