import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { resetCups } from '../store/actions/cupsActions';

import { Button } from '../components/Button';
import { WaterCircle } from '../components/WaterCircle';

import theme from '../theme';

export const MainScreen = () => {
  let drinkedMl = useSelector((state) => state.cups.drinkedMl);
  let waterGoal = useSelector((state) => state.user.waterGoal);

  const dispatch = useDispatch();

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
        <Text style={styles.cupsText}>{`${drinkedMl}/${waterGoal} мл`}</Text>
      </View>
      {/*  */}
      <WaterCircle />
    </SafeAreaView>
  )
};

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
});