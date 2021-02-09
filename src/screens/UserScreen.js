import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Share, ScrollView } from 'react-native'

import * as Linking from 'expo-linking';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { setUserWeight, setUserWaterGoal, setUserGender } from '../store/actions/userActions';

import { Button } from '../components/Button'
import { UserThanks } from '../components/UserThanks'
import theme from '../theme'

export const UserScreen = () => {
  const itunesItemId = 982107779; // ID приложения в магазине
  const navigation = useNavigation();

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
      <ScrollView>
        <UserThanks />

        <View style={styles.settingsContainer}>
          <Text style={styles.settingsHeader}>Настройки</Text>
        </View>

        <Button 
          name="Пользователь" 
          iconName="person-circle-outline"
          onPress={
            () => navigation.push("UserScreen")
          }
        />

        <Button 
          name="Instagram разработчика" 
          iconName="logo-instagram"
          onPress={
            () => Linking.openURL("instagram://user?username=denys_dev")
          }
        />

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

      </ScrollView>
    </View> 
  )
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.PRIMARY_COLOR,
    alignItems: 'center',
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
  },
  switchContainer: {
    width: "100%",
    backgroundColor: theme.BTN_PRIMARY,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60
  },
  switchText: {
    color: theme.SECONDARY_COLOR,
    fontSize: theme.CONTAINER_HEADER,
    fontFamily: theme.CONTAINER_FONT_FAMILY,
  },
})
