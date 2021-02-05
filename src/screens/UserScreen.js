import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Share } from 'react-native'

import * as Linking from 'expo-linking';
import { Ionicons } from "@expo/vector-icons";
import { Picker } from '@react-native-picker/picker';

import { useDispatch, useSelector } from 'react-redux';
import { setWaterGoal } from '../store/actions/waterGoalActions';

import { Button } from '../components/Button'
import { UserThanks } from '../components/UserThanks'
import { ModalPicker } from '../components/ModalPicker';
import theme from '../theme'

export const UserScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wG, setWG] = useState(1400);
  
  let waterGoal = useSelector((state) => state.waterGoal.waterGoal);
  const itunesItemId = 982107779; // ID приложения в магазине
  const dispatch = useDispatch()

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        "Эй, установи JustWater, отличное приложение для отслеживания водного баланса! expo.io/@diocode/JustWater",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onCancel = () => {
    setIsVisible(false);
  };

  const onConfirm = () => {
    onCancel()
    dispatch(setWaterGoal(wG))
  };

  return (
    <View style={styles.main}>
      <View style={styles.wrapper}>
        <UserThanks />

        <View style={styles.settingsContainer}>
          <Text style={styles.settingsHeader}>Настройки</Text>
        </View>

        <Button 
          name="Оценить JustWater" 
          iconName="ios-star" 
          onPress={
            () => Linking.openURL(`https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review`)
          }
        />

        <Button name="Поделиться приложением" 
          iconName="arrow-redo-sharp"
          onPress={onShare}
        />

        <Button 
          name="Instagram разработчика" 
          iconName="logo-instagram"
          onPress={
            () => Linking.openURL("instagram://user?username=denys_dev")
          }
        />

        <Button 
          name="Цель на день" 
          textIcon={`${waterGoal}`}
          onPress={
            () => setIsVisible(true)
          }
        />
      </View>

      <ModalPicker 
        isPickerVisible={isVisible} 
        onConfirm={onConfirm} 
        onCancel={onCancel} 
        date={new Date()} 
        value={wG}
        setValue={setWG}
      />
    </View>
  )
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
  },
  wrapper: {
    paddingTop: windowHeight > 800 ? "7%" : "8%",
    paddingHorizontal: 20,

  },
  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  settingsHeader: {
    color: "#fff",
    fontSize: theme.HEADER,
    fontFamily: "norms-bold",
  }
})
