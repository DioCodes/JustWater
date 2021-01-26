import React from 'react'
import { StyleSheet, Text, View, Dimensions, Share } from 'react-native'

import * as Linking from 'expo-linking';
import { Ionicons } from "@expo/vector-icons";

import { Button } from '../components/Button'
import { UserThanks } from '../components/UserThanks'
import theme from '../theme'


export const UserScreen = () => {
  const itunesItemId = 982107779; // ID приложения в магазине

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

  return (
    <View style={styles.main}>
      <UserThanks />

      <View style={styles.settingsContainer}>
        <Text style={styles.settingsHeader}>Настройки</Text>
      </View>

      <Button name="Оценить JustWater" 
        iconName="ios-star" 
        onPress={
          () => Linking.openURL(`https://apps.apple.com/app/apple-store/id${itunesItemId}?action=write-review`)
        }
      />

      <Button name="Поделиться приложением" 
        iconName="arrow-redo-sharp"
        onPress={onShare}
      />

      <Button name="Instagram разработчика" 
        iconName="logo-instagram"
        onPress={
          () => Linking.openURL("instagram://user?username=denys_dev")
        }
      />

    </View>
  )
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
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
